import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'movies/:category', component: MoviesComponent, runGuardsAndResolvers: 'always' },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'genre', component: MoviesComponent, runGuardsAndResolvers: 'always' },
  { path: '', redirectTo: '/movies/now-playing', pathMatch: 'full' },
  { path: '**', redirectTo: '/movies/now-playing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
