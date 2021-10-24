import { Component } from '@angular/core';
import { MovieDisplayService } from './movie-display.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent {

  constructor(public movieDisplayService: MovieDisplayService) { }

}
