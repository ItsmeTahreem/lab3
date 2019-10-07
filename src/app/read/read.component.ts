import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../service/movie-service.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  Mymovies:any = [];

  constructor(private movieService: MovieServiceService){

   }

  ngOnInit() {

    this.movieService.GetMovieInformation().subscribe((data)=>{
      this.Mymovies = data.Search;
      console.log(this.Mymovies);


  })
  }
}
