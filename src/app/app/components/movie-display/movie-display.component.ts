import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent implements OnInit {
  @Input() movieData: any;

  constructor() { }

  movieAimage: any;
  movieBimage: any;

  ngOnInit(): void {
    this.getImageUrls();
  }

  generateRandomInteger() {
    const min = 0;
    const max = this.movieData.length;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  getImageUrls() {
    let randomNumber1 = this.generateRandomInteger();
    let randomNumber2 = this.generateRandomInteger();
    
    if (randomNumber1 === randomNumber2) {
      randomNumber1 = this.generateRandomInteger();

    } else {
      
      this.movieAimage = this.movieData[randomNumber1].imageUrl;
      this.movieBimage = this.movieData[randomNumber2].imageUrl;
    }
  } 
  
}
