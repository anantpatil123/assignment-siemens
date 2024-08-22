import { TestBed } from '@angular/core/testing';

import { StudetService } from './studet.service';

describe('StudetService', () => {
  let service: StudetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
