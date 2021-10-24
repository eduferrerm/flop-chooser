import { Injectable, OnInit } from "@angular/core";
import { FLOP_DATA } from '../../../FLOP_DATA';

@Injectable({
  providedIn: 'root',
})

export class MovieDisplayService {
  movieData: any = FLOP_DATA;
  displayingMovies: any = [];
  movieAimage: any;
  movieBimage: any;
  selectionWasMade: boolean = false;
  userCorrect: any;
  message: any;

  generateRandomInteger() {
    const min = 0;
    const max = this.movieData.length;
    return Math.floor(Math.random() * (max - min) + min);
  };

  getRandomMovies() {
    let randomNumbers = [this.generateRandomInteger(),this.generateRandomInteger()];
    
    randomNumbers.forEach((item, index)=>{
      while(randomNumbers.indexOf(item) !== index){
        randomNumbers = [this.generateRandomInteger(),this.generateRandomInteger()];
      }
    })
    this.displayingMovies = [];
    this.displayingMovies.push(this.movieData[randomNumbers[0]]);
    this.displayingMovies.push(this.movieData[randomNumbers[1]]);      
  };

  getMovieImage(){
    this.getRandomMovies();
    this.movieAimage = this.displayingMovies[0].imageUrl;
    this.movieBimage = this.displayingMovies[1].imageUrl;
  };

  compareMovieRating(movieClicked: number){

    if (!this.selectionWasMade) {

      let selectedMovieRating = this.displayingMovies[movieClicked].stars;
      let otherMovie = movieClicked === 0 ? 1 : 0;
      let otherMovieRating = this.displayingMovies[otherMovie].stars;
      let lowerRatingMovie;
      let higherRatingMovie;
  
      if (selectedMovieRating < otherMovieRating) {
        this.userCorrect = true;
        lowerRatingMovie = this.displayingMovies[movieClicked];
        higherRatingMovie = this.displayingMovies[otherMovie];
  
      } else {
        this.userCorrect = false;
        lowerRatingMovie = this.displayingMovies[otherMovie];
        higherRatingMovie = this.displayingMovies[movieClicked];
  
      }
      this.selectionWasMade = true;
      this.message = this.generateMessage(lowerRatingMovie, higherRatingMovie);
    }
  };

  generateMessage(lowerRatingMovie: any, higherRatingMovie: any){
    return `${lowerRatingMovie.title} (${lowerRatingMovie.stars}) has less rating than ${higherRatingMovie.title} (${higherRatingMovie.stars})`;
  };

  restartGame(){
    this.getRandomMovies();
    this.getMovieImage();
    this.selectionWasMade = false;
  };
}