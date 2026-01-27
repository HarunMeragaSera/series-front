import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SeriesService } from '../../services/series.service';
import { Rating } from '../../enums/rating.enum';
import { GenreService } from '../../services/genre.service';
import { Genre } from '../../models/genre.model';
import { GenreMultiselectComponent } from '../../components/genre-multiselect/genre-multiselect.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SeriesCreateModel } from '../../models/series_create.model';

@Component({
  selector: 'app-series-create',
  standalone: true,
  imports: [
    TranslateModule,CommonModule,ReactiveFormsModule,GenreMultiselectComponent,
    MatFormFieldModule,MatSelectModule,MatInputModule
  ],
  templateUrl: './series-create.component.html',
  styleUrl: './series-create.component.css'
})
export class SeriesCreateComponent implements OnInit {

  genres?: Genre[] = [];
  ratingOptions = Object.values(Rating);

  constructor(
    private seriesService: SeriesService,
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
    this.getGenres();

  }

  seriesForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      rating: new FormControl<Rating | null>(null),
      imageUrl: new FormControl('', [Validators.maxLength(500)]),
      yearWatch: new FormControl<number | null>(null),
      description: new FormControl('', [Validators.maxLength(2000)]),
      genreIds: new FormControl<number[]|null>(null)
  });

  getGenres(): void {
    this.genreService.getAll().subscribe({
      next: (genres) => {
        this.genres = genres;
      },
      error: (err) => {
        console.error('Error fetching genres', err);
      }
    });
  }

  onGenresSelected(ids: number[]): void {
    this.seriesForm.patchValue({
    genreIds: ids
    });
  }

submit(): void {
  if (this.seriesForm.invalid) {
    console.warn('Form invalid', this.seriesForm.errors);
    this.seriesForm.markAllAsTouched();
    return;
  }
  const seriesDto: SeriesCreateModel = { ...this.seriesForm.value };
  this.seriesService.create(seriesDto).subscribe({
    next: (createdSeries) => {
      console.log('Series created successfully', createdSeries);
      this.seriesForm.reset();
    },
    error: (err) => {
      console.error('Error creating series', err);
    }
  });
}

}
