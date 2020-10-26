import { Observable, timer } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

export class PickyWeatherStation {

    getTemperature(cityParam): Observable<number> {

        return timer(1000)
            .pipe(
                mapTo(cityParam),
                filter(city => city !== 'Paris'),
                map(city => 100 / city.length)
            );

    }

}
