import { TestBed } from '@angular/core/testing';

import { EditSitesService } from './edit-sites.service';

describe('EditSitesService', () => {
  let service: EditSitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditSitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
