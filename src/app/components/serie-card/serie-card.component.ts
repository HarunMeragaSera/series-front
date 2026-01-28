import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Series } from '../../models/series.model';
import { Router } from '@angular/router';
import { Rating } from '../../enums/rating.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'series-card',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})

export class SerieCardComponent {

  @Input() serie!: Series;

  constructor(private router: Router) { }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/default.png';
  }

  goToDetail() {
    this.router.navigate(['/series', this.serie.publicId]);
  }

  ratingClassMap: Record<Rating, string> = {
    [Rating.insufficient]: 'rating-insufficient',
    [Rating.sufficient]: 'rating-sufficient',
    [Rating.notable]: 'rating-notable',
    [Rating.excellent]: 'rating-excellent',
  };

  ratingSoftClassMap: Record<Rating, string> = {
    [Rating.insufficient]: 'year-soft-red',
    [Rating.sufficient]: 'year-soft-yellow',
    [Rating.notable]: 'year-soft-blue',
    [Rating.excellent]: 'year-soft-green',
  };
}
