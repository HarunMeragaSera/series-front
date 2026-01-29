import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from '../../services/genre.service';
import { MessageService } from '../../services/message.service';
import { SeriesService } from '../../services/series.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { GenreMultiselectComponent } from '../../components/genre-multiselect/genre-multiselect.component';
import { Rating } from '../../enums/rating.enum';
import { Genre } from '../../models/genre.model';
import { Series } from '../../models/series.model';

@Component({
  selector: 'app-series-update',
  standalone: true,
  imports: [TranslateModule, CommonModule, ReactiveFormsModule, GenreMultiselectComponent,
    MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './series-update.component.html',
  styleUrl: './series-update.component.css'
})
export class SeriesUpdateComponent {


  genres?: Genre[] = [];
  ratingOptions = Object.values(Rating);
  serie: Series | null = null;
  publicId: string|null = null;


  constructor(
    private seriesService: SeriesService,
    private genreService: GenreService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.getGenres();
    this.route.paramMap.subscribe(params => {
      this.publicId = params.get('publicId');
      if (this.publicId) {
        console.log('PublicId:', this.publicId);
        this.getSerie(this.publicId);
      }
    });


  }

  seriesForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    rating: new FormControl<Rating | null>(null),
    imageUrl: new FormControl('', [Validators.maxLength(500)]),
    yearWatch: new FormControl<number | null>(null),
    description: new FormControl('', [Validators.maxLength(2000)]),
    genreIds: new FormControl<number[] | null>(null)
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

  getSerie(publicId: string): void {
    this.seriesService.getByPublicId(publicId).subscribe({
      next: (serie) => {
        this.serie = serie;
        this.seriesForm.patchValue({
          name: serie.name,
          rating: serie.rating,
          imageUrl: serie.imageUrl,
          yearWatch: serie.yearWatch,
          description: serie.description
        });
      }
    });
  }

  onGenresSelected(ids: number[]): void {
    this.seriesForm.patchValue({
      genreIds: ids
    });
  }

  submit(): void { }
}
