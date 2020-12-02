import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Movies } from '../models/movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_BASE = environment.API_BASE;
  API_KEY = environment.API_KEY;
  body: any;
  err: any;

  constructor(private http: HttpClient) { }

    formatParams() {
      let params = new HttpParams()
        .set('api_key', this.API_KEY)
        .set('language', 'fr-FR');
      return { params };
    }


  getPopularMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>('${this.API_BASE}movie/popular', this.formatParams());
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      this.body = error || '';
      this.err = this.body.error || JSON.stringify(this.body);
      errMsg = `${error.status} - ${error.statusText || ''} ${this.err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
