import { Component } from '@angular/core';
import {MovieServiceService} from './service/movie-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'movie-app';
  Mymovies:any = [];

  constructor(private movieService: MovieServiceService){
    this.movieService.GetMovieInformation().subscribe((data)=>{
      this.Mymovies = data.Search;
      console.log(this.Mymovies);

      })
  }

}
