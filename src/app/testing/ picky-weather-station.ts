import { Observable, timer } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

export class PickyWeatherStation {

    getTemperature(city): Observable<number> {

        return timer(1000)
            .pipe(
                mapTo(city),
                filter(_city => _city !== 'Paris'),
                map(_city => 100 / _city.length)
            );

    }

}