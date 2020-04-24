import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from './../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {Movie} from '../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

id: number;
movie: Movie;
movieSub$: Subscription;

  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ =
     this.movieservice
     .movieFromHttp(this.id)
     .subscribe(movie => {
      this.movie = movie;
      console.log(movie.results);
      console.log(this.movie);
    });
  }

  ngOnDestroy(){
    this.movieSub$.unsubscribe();
  }

}
