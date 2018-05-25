import { TestBed, inject } from '@angular/core/testing';

import { HackerNewsAPIService } from './hacker-news-api.service';

describe('HackerNewsAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerNewsAPIService]
    });
  });

  it('should be created', inject([HackerNewsAPIService], (service: HackerNewsAPIService) => {
    expect(service).toBeTruthy();
  }));
});
