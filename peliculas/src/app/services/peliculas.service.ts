import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'assets/dataMovie.json';
  constructor() { }
  getMovies() {
    return axios.get(this.apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('Error en la data', error);
        throw error;
      });
  }

}
