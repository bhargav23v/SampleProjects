import { TestBed } from '@angular/core/testing';

import { NewsRatingServiceService } from './news-rating-service.service';

describe('NewsRatingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsRatingServiceService = TestBed.get(NewsRatingServiceService);
    expect(service).toBeTruthy();
  });
});
