import { TestBed, inject } from '@angular/core/testing';

import { HotService } from './hot.service';

describe('HotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotService]
    });
  });

  it('should be created', inject([HotService], (service: HotService) => {
    expect(service).toBeTruthy();
  }));
});
