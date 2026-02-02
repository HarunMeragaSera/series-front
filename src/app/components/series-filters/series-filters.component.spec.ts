import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesFiltersComponent } from './series-filters.component';

describe('SeriesFiltersComponent', () => {
  let component: SeriesFiltersComponent;
  let fixture: ComponentFixture<SeriesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
