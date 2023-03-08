import { TestBed } from '@angular/core/testing';

import { MyLbService } from './my-lb.service';

describe('MyLbService', () => {
  let service: MyLbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
