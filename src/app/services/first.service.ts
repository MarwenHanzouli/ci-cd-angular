import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, mapTo, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }

  getTemperature(city: string): Observable<any> {
    return of(5).pipe(delay(3000), map(val => val * city.length));
  }
}
