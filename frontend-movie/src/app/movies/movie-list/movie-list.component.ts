import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() title: string | number;
  @Input() movies: MovieModel[];
  @Input() adult: string;
  @Input() lang: string;
  @Input() dataParam: string;

  constructor() { }

  ngOnInit(): void {
  }

}
