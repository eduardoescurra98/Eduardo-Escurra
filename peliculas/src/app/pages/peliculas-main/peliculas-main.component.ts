import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import {MatSelectModule} from '@angular/material/select';
import { PeliculasService } from '../../services/peliculas.service';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieData, searchFilter } from '../../interfaces/peliculasInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas-main',
  standalone: true,
  imports: [CommonModule ,MatCardModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,ReactiveFormsModule,MatSelectModule],
  templateUrl: './peliculas-main.component.html',
  styleUrl: './peliculas-main.component.scss'
})
export class PeliculasMainComponent implements OnInit  {
  searchFilter:searchFilter={
    movie: '',
    description: '',
    genre: ''
  }
  movieData:MovieData={
    movies: [],
    genres: []
  }
  constructor(private peliculasService:PeliculasService){   
  }
  ngOnInit(): void {

    this.peliculasService.getMovies().then(data => {
      this.movieData = data;
    }).catch(error => {
      console.error('Error data Movies', error);
    });
  }


  //////////////////Filtra Movies//////////////////////////////
  filteredMovies(): Movie[] {
    return this.movieData.movies.filter(movie => {
      const matchesTitle = movie.title.toLowerCase().includes(this.searchFilter.movie.toLowerCase());
      const matchesDescription = movie.description.toLowerCase().includes(this.searchFilter.description.toLowerCase());
      const matchesGenre = this.searchFilter.genre.length? this.searchFilter.genre.includes(movie.genre) 
      : true;

      return matchesTitle && matchesDescription && matchesGenre;
    });
  }
}
