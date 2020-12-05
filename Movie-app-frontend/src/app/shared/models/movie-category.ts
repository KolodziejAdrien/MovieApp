import { Movies } from './movies';

export interface MovieCategory {
  page: number;
  results: Movies[];
  dates?: {
      maximum: string;
      minimum: string;
  };
  total_pages: number;
  total_results: number;
}
