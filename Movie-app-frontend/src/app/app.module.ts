import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopRatedMovieComponent } from './movies/top-rated-movie/top-rated-movie.component';
import { PopularMovieComponent } from './movies/popular-movie/popular-movie.component';
import { LatestMovieComponent } from './movies/latest-movie/latest-movie.component';
import { MovieComponent } from './movies/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    TopRatedMovieComponent,
    PopularMovieComponent,
    LatestMovieComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
