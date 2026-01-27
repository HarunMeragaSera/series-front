import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMultiselectComponent } from './genre-multiselect.component';

describe('GenreMultiselectComponent', () => {
  let component: GenreMultiselectComponent;
  let fixture: ComponentFixture<GenreMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreMultiselectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
