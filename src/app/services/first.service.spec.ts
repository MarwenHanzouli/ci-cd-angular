import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';

import { FirstService } from './first.service';

describe('FirstService', () => {
  let service: FirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a right value', fakeAsync(() => {
    let tempExpected;
    service.getTemperature('Tunis').subscribe(temp => {tempExpected = temp; });
    tick(3005);
    expect(tempExpected).toEqual(25);
  }));
});
