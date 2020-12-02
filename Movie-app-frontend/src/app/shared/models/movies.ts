import { MovieGenre } from './movie-genre';

export class Movies {
  poster_path!: string;
  adult!: boolean;
  overview!: string;
  release_date!: string;
  genre_ids!: MovieGenre;
  id!: number;
  original_title!: string;
  original_language!: string;
  title!: string;
  backdrop_path!: string;
  popularity!: number;
  vote_count!: number;
  video!: boolean;
  vote_average!: number;
}