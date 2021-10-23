import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent implements OnInit {
  @Input() movieData: any;

  constructor() { }

  displayingMovies: any = [];
  movieAimage: any;
  movieBimage: any;

  ngOnInit(): void {
    this.getMovieImage();
  }

  generateRandomInteger() {
    const min = 0;
    const max = this.movieData.length;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  getRandomMovies() {
    let randomNumbers = [this.generateRandomInteger(),this.generateRandomInteger()];
    
    randomNumbers.forEach((item, index)=>{
      while(randomNumbers.indexOf(item) !== index){
        randomNumbers = [this.generateRandomInteger(),this.generateRandomInteger()];
      }
    })
    this.displayingMovies.push(this.movieData[randomNumbers[0]]);
    this.displayingMovies.push(this.movieData[randomNumbers[1]]);      
  };

  getMovieImage(){
    this.getRandomMovies();
    this.movieAimage = this.displayingMovies[0].imageUrl;
    this.movieBimage = this.displayingMovies[1].imageUrl;
  };

  compareMovieRating(movieClicked: number){
    let selectedMovieRating = this.displayingMovies[movieClicked].stars;
    let otherMovie = movieClicked === 0 ? 1 : 0;
    let otherMovieRating = this.displayingMovies[otherMovie].stars;
    
    console.log('selected movie:', this.displayingMovies[movieClicked].title);

    if (selectedMovieRating < otherMovieRating) {
      console.log('correct!');
      console.log('selected movie rating:',  selectedMovieRating);
      console.log('other movie rating:',  otherMovieRating);
      console.log(' ');
    } else {
      console.log('WRONG');
      console.log('selected movie rating:',  selectedMovieRating);
      console.log('other movie rating:',  otherMovieRating);
      console.log(' ');
    }
  };
}
