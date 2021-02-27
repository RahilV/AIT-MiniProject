import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListingsComponent } from './site-listings.component';

describe('SiteListingsComponent', () => {
  let component: SiteListingsComponent;
  let fixture: ComponentFixture<SiteListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
