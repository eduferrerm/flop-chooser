import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieDisplayComponent } from './app/components/movie-display/movie-display.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MovieDisplayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
