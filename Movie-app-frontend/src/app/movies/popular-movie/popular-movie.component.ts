import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Movies } from 'src/app/shared/models/movies';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {

  popularMovies: Movies[] = [];

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    // this.getMovies();
  }

  getMovies () {
    // this.movieService.getPopularMovies().subscribe((response) => {
    // this.popularMovies = response});
    // console.log(this.popularMovies);
  }

}
