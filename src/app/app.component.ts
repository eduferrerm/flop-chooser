import { Component } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {


  constructor() {

  }

  // Feel free to put your own data here if you have other favorite flops
  flops = FLOP_DATA;
	



}