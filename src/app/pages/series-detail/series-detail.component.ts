import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Series } from '../../models/series.model';
import { CommonModule } from '@angular/common';
import { GenreService } from '../../services/genre.service';
import { Genre } from '../../models/genre.model';
import { GenreNamesPipe } from '../../pipes/genre-names.pipe';

@Component({
  selector: 'app-series-detail',
  standalone: true,
  imports: [TranslateModule, CommonModule,GenreNamesPipe],
  templateUrl: './series-detail.component.html',
  styleUrl: './series-detail.component.css'
})
export class SeriesDetailComponent implements OnInit {

  serie!: Series;
  message?: string;
  genres?: Genre[] = [];

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,
    private router: Router,
    private genreService: GenreService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const publicId = params.get('publicId');
      if (publicId) {
        this.loadSerie(publicId);
        this.getGenres();
      }
    });
  }

  loadSerie(publicId: string) {
    this.seriesService.getByPublicId(publicId).subscribe({
      next: data => this.serie = data,
      error: err => console.error('Serie no encontrada', err)
    });
  }

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

  goToSeriesUpdate() {
    this.router.navigate(['/series/update', this.serie.publicId]);
  }

  getGenreNamesByIds(): string[] {
    const ids = this.serie?.genres ?? [];

    if (!ids.length || !this.genres?.length) {
      return [];
    }

    const isSpanish = this.translate.currentLang === 'es';

    return this.genres
      .filter(genre => ids.includes(genre.id))
      .map(genre => isSpanish ? genre.name_es : genre.name);
  }
}
