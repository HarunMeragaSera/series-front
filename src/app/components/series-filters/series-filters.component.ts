import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Rating } from '../../enums/rating.enum';
import { Genre } from '../../models/genre.model';
import { SeriesFilter } from '../../models/series_filter.model';
import { TranslateModule } from '@ngx-translate/core';
import { GenreService } from '../../services/genre.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'series-filters',
  standalone: true,
  imports: [
        CommonModule,
    ReactiveFormsModule,
MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './series-filters.component.html',
  styleUrl: './series-filters.component.css'
})

export class SeriesFiltersComponent {

  genres?: Genre[] = [];

  constructor(
    private genreService: GenreService,
  ) { }

    ngOnInit(): void {
    this.getGenres();

  }

  @Output() filtersChange = new EventEmitter<SeriesFilter>();

  ratings = Object.values(Rating);

  form = new FormGroup({
    name: new FormControl<string | null>(null),
    rating: new FormControl<Rating | null>(null),
    yearWatch: new FormControl<number | null>(null),
    genres: new FormControl<number[]>([])
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

  applyFilters(): void {
    this.filtersChange.emit(this.cleanFilters());
  }

  clearFilters(): void {
    this.form.reset({
      genres: []
    });
    this.filtersChange.emit({});
  }

  private cleanFilters(): SeriesFilter {
    const value = this.form.value;

    return {
      ...(value.name && { name: value.name }),
      ...(value.rating && { rating: value.rating }),
      ...(value.yearWatch && { yearWatch: value.yearWatch }),
      ...(value.genres?.length && { genres: value.genres })
    };
  }

}
