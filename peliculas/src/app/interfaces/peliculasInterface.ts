export interface Movie {
    id: number;
    title: string;
    description: string;
    genre: string;
    img:string;
  }
  
  export interface MovieData {
    movies: Movie[];
    genres: string[];
  }
  export interface searchFilter {
    movie: string;
    description: string;
    genre: string;
  }
  