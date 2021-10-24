import { Component, OnInit } from '@angular/core';
import { MovieDisplayService } from './app/components/movie-display/movie-display.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit  {


  constructor(public movieDisplayService: MovieDisplayService) {

  }

  ngOnInit(): void {
    this.movieDisplayService.getMovieImage();
  }
  

}