import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

 private apiKey = 'http://www.omdbapi.com/?apikey=10052ba5&t=&';

  constructor(private http: HttpClient) { }

  getMovies(){
    this.http.get(this.apiKey).subscribe(res => {
      console.log(res);
    })

  }
}
