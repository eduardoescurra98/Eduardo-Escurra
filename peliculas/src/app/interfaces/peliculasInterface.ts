export interface Movie {
    id: number;
    title: string;
    description: string;
    genre: string;
    img:string;
  }
  
  // Paso 2: Crear la interfaz para el JSON completo
  export interface MovieData {
    movies: Movie[];
    genres: string[];
  }
  export interface searchFilter {
    movie: string;
    description: string;
    genre: string;
  }
  