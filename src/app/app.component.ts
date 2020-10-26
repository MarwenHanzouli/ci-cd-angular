import { Component, OnInit } from '@angular/core';
import { FirstService } from './services/first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Letslearn';
  points = 1;

  constructor(private firstService: FirstService){}

  ngOnInit(): void {
    this.firstService.getTemperature('Tunis').subscribe(val => {
      return console.log(val);
    });
  }

  plus1(): void {
    if (5 === 5){
      this.points++;
    }
    else {
      console.log('this bloc is for testing statement coverage');
      console.log('yessssssssss');
      console.log('calculate');
      console.log('coverage');
      console.log('statement');
    }
  }

  reset(): void {
    this.points = 0;
  }
}
