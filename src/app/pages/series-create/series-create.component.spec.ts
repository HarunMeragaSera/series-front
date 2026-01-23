import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCreateComponent } from './series-create.component';

describe('SeriesCreateComponent', () => {
  let component: SeriesCreateComponent;
  let fixture: ComponentFixture<SeriesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
