import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {of} from 'rxjs';
import { Movie } from '../models/movie.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //api_key TMDb = 647b39ccfb59105c511c2df9019bc7ec; -> apikey
  //https://cors-anywhere.herokuapp.com/ ->corsanywhere


private tmdb ="https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/4/list/1?page=1&api_key=647b39ccfb59105c511c2df9019bc7ec&sort_by=title.asc";



  constructor(private http: HttpClient) { }

getMoviesFromHttp(){
 return this.http.get<Movie[]>(this.tmdb)/* .subscribe(res => {
   console.log(res)
 }) */
}

movieFromHttp(id: number){
  return this.http.get<Movie>(`${this.tmdb}/${id}`);
}

}
