import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Movies } from '../models/movies';
import { MovieCategory } from '../models/movie-category';
import { MovieDetails } from '../models/movie-details';
import { MovieCredits } from '../models/movie-credits';
import { MoviePerson } from '../models/movie-person';
import { MovieVideos } from '../models/movie-videos';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // API_BASE = environment.API_BASE;
  API_KEY = environment.API_KEY;
  body: any;
  err: any;
  // url = this.API_BASE + 'movie/popular';
  private URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';
  private URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
  private URL_MOVIE = 'https://api.themoviedb.org/3/movie';
  private URL_PERSON = 'https://api.themoviedb.org/3/person';
  private URL_GENRE = 'https://api.themoviedb.org/3/genre';

  constructor(private http: HttpClient) { }

  //   formatParams() {
  //     let params = new HttpParams()
  //       .set('api_key', this.API_KEY)
  //       .set('language', 'fr-FR');
  //     return { params };
  //   }


  // getPopularMovies(): Observable<Movies[]> {
  //   // return this.http.get<Movies[]>('${this.API_BASE}movie/popular', this.formatParams());
  //   return this.http.get<Movies[]>(this.url, this.formatParams());
  // }

  // private handleError(error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     this.body = error || '';
  //     this.err = this.body.error || JSON.stringify(this.body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${this.err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
  getMovie(category: string, page: number, lang: string, adult?: any) {
    switch (category) {
      case 'now-playing': return this.getNowPlaying(page, lang);
      case 'upcoming': return this.getUpComing(page, lang);
      case 'discover': return this.getMovieDiscover(page, lang, adult);
    }
  }
  getSearchMovie(name: string, page: number, lang: string, adult: string): Observable<MovieCategory> {
    return this.http.get<MovieCategory>(`
      ${this.URL_SEARCH}?api_key=${this.API_KEY}&language=${lang}&query=${name}&page=${page}&include_adult=${adult}
    `);
  }
  getNowPlaying(page: number, lang: string): Observable<MovieCategory> {
    return this.http.get<MovieCategory>(`${this.URL_MOVIE}/now_playing?api_key=${this.API_KEY}&language=${lang}&page=${page}`);
  }
  getDetailsMovie(movieID: number, lang: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.URL_MOVIE}/${movieID}?api_key=${this.API_KEY}&language=${lang}`);
  }
  getMovieDiscover(page: number, lang: string, adult: string): Observable<MovieCategory> {
    return this.http.get<MovieCategory>(`
      ${this.URL_DISCOVER}?api_key=${this.API_KEY}&language=${lang}&sort_by=popularity.desc&page=${page}&include_adult=${adult}
    `);
  }
  getCastMovie(movieID: number): Observable<MovieCredits> {
    return this.http.get<MovieCredits>(`${this.URL_MOVIE}/${movieID}/credits?api_key=${this.API_KEY}`);
  }
  getVideoMovie(movieID: number, lang: string): Observable<MovieVideos> {
    return this.http.get<MovieVideos>(`${this.URL_MOVIE}/${movieID}/videos?api_key=${this.API_KEY}&language=${lang}`);
  }
  getGenreMovie(genreID: number, page: number, lang: string, adult: string): Observable<MovieCategory> {
    return this.http.get<MovieCategory>(`
      ${this.URL_GENRE}/${genreID}/movies?api_key=${this.API_KEY}&language=${lang}&page=${page}&include_adult=${adult}
    `);
  }
  getSimilarMovies(movieID: number, lang: string): Observable<MovieCategory> {
    return this.http.get<MovieCategory>(`${this.URL_MOVIE}/${movieID}/similar?api_key=${this.API_KEY}&language=${lang}`);
  }
  getUpComing(page: number, lang: string): Observable<MovieCategory> {
    return this.http.get<MovieCategory>(`${this.URL_MOVIE}/upcoming?api_key=${this.API_KEY}&language=${lang}&page=${page}`);
  }
  getPerson(personID: number, lang: string): Observable<MoviePerson> {
    return this.http.get<MoviePerson>(`${this.URL_PERSON}/${personID}?api_key=${this.API_KEY}&language=${lang}`);
  }
  getPersonMovies(personID: number, lang: string): Observable<MovieCredits> {
    return this.http.get<MovieCredits>(`${this.URL_PERSON}/${personID}/movie_credits?api_key=${this.API_KEY}&language=${lang}`);
  }
  // getPersonTv(personID: number, lang: string): Observable<TvCredits> {
  //   return this.http.get<TvCredits>(`${this.URL_PERSON}/${personID}/tv_credits?api_key=${this.API_KEY}&language=${lang}`);
  // }
}
