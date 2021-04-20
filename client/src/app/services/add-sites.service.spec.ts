import { TestBed } from '@angular/core/testing';

import { AddSitesService } from './add-sites.service';

describe('AddSitesService', () => {
  let service: AddSitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
