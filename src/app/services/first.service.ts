import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, mapTo, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }

  getTemperature(city:string){
    return of(5).pipe(delay(3000),map(val=> val*city.length));
  }
}
