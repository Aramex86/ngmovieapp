import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import {debounceTime} from 'rxjs/operators';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private movieservice: MovieService) {

   
  }

  ngOnInit() {
    this.movies$ = this.movieservice.getMoviesFromHttp()
    
  }

}
