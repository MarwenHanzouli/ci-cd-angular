import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'Letslearn';
  points = 1;

  plus1(): void {
    this.points++;
  }

  reset(): void {
    this.points = 0;
  }
}
