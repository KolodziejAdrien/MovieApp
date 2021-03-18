import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetailsModel } from '../../models/movie-details.model';
// import { MovieCategoryModel } from '../../models/movie-category.model';
// import { MovieCreditsModel } from '../../models/movie-credits.model';
import { MoviePersonModel } from '../../models/movie-person.model';
// import { MovieVideosModel } from '../../../models/movie-videos.model';
// import { TvCreditsModel } from '../../models/tv-credits.model';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private API_KEY = environment.API_KEY;
  private URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';
  private URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
  private URL_MOVIE = 'https://api.themoviedb.org/3/movie';
  private URL_PERSON = 'https://api.themoviedb.org/3/person';
  private URL_GENRE = 'https://api.themoviedb.org/3/genre';

  constructor(private http: HttpClient) { }

  getSearchMovie(name: string, page: number, lang: string, adult: string): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(`
      ${this.URL_SEARCH}?api_key=${this.API_KEY}&language=${lang}&query=${name}&page=${page}&include_adult=${adult}
    `);
  }
  getNowPlaying(page: number, lang: string): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(`${this.URL_MOVIE}/now_playing?api_key=${this.API_KEY}&language=${lang}&page=${page}`);
  }
  getDetailsMovie(movieID: number, lang: string): Observable<MovieDetailsModel> {
    return this.http.get<MovieDetailsModel>(`${this.URL_MOVIE}/${movieID}?api_key=${this.API_KEY}&language=${lang}`);
  }
  getMovieDiscover(page: number, lang: string, adult: string): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(`
      ${this.URL_DISCOVER}?api_key=${this.API_KEY}&language=${lang}&sort_by=popularity.desc&page=${page}&include_adult=${adult}
    `);
  }
  getCastMovie(movieID: number): Observable<MovieCreditsModel> {
    return this.http.get<MovieCreditsModel>(`${this.URL_MOVIE}/${movieID}/credits?api_key=${this.API_KEY}`);
  }
  getVideoMovie(movieID: number, lang: string): Observable<MovieVideosModel> {
    return this.http.get<MovieVideosModel>(`${this.URL_MOVIE}/${movieID}/videos?api_key=${this.API_KEY}&language=${lang}`);
  }
  getGenreMovie(genreID: number, page: number, lang: string, adult: string): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(`
      ${this.URL_GENRE}/${genreID}/movies?api_key=${this.API_KEY}&language=${lang}&page=${page}&include_adult=${adult}
    `);
  }
  getSimilarMovies(movieID: number, lang: string): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(`${this.URL_MOVIE}/${movieID}/similar?api_key=${this.API_KEY}&language=${lang}`);
  }
  getUpComing(page: number, lang: string): Observable<MovieCategoryModel> {
    return this.http.get<MovieCategoryModel>(`${this.URL_MOVIE}/upcoming?api_key=${this.API_KEY}&language=${lang}&page=${page}`);
  }
  getPerson(personID: number, lang: string): Observable<MoviePersonModel> {
    return this.http.get<MoviePersonModel>(`${this.URL_PERSON}/${personID}?api_key=${this.API_KEY}&language=${lang}`);
  }
  getPersonMovies(personID: number, lang: string): Observable<MovieCreditsModel> {
    return this.http.get<MovieCreditsModel>(`${this.URL_PERSON}/${personID}/movie_credits?api_key=${this.API_KEY}&language=${lang}`);
  }
  getPersonTv(personID: number, lang: string): Observable<TvCreditsModel> {
    return this.http.get<TvCreditsModel>(`${this.URL_PERSON}/${personID}/tv_credits?api_key=${this.API_KEY}&language=${lang}`);
  }
}
