import { PickyWeatherStation } from './ picky-weather-station';
import { async, fakeAsync, tick } from '@angular/core/testing';

describe('PickyWeatherStation', () => {

    let weatherStation: PickyWeatherStation;

    beforeEach(() => {
        weatherStation = new PickyWeatherStation();
    });

    // it('should give temperature', fakeAsync(() => {

    //     weatherStation.getTemperature('Paris')
    //         .subscribe(temperature => {
    //             expect(temperature).toEqual(-10);
    //         });

    // }));
    it('should control time', fakeAsync(() => {

        let value;

        setTimeout(() => value = 'VALUE', 1000);

        tick(999);

        expect(value).toEqual(undefined);

        tick(1000);

        expect(value).toEqual('VALUE');

    }));

});
