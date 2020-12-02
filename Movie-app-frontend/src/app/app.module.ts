import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopRatedMovieComponent } from './movies/top-rated-movie/top-rated-movie.component';
import { PopularMovieComponent } from './movies/popular-movie/popular-movie.component';
import { LatestMovieComponent } from './movies/latest-movie/latest-movie.component';
import { MovieComponent } from './movies/movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

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
    CommonModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
