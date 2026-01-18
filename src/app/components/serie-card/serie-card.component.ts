import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Series } from '../../models/series.model';
import { Router } from '@angular/router';

@Component({
  selector: 'series-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})

export class SerieCardComponent {

  @Input() serie!: Series;

  constructor(private router: Router) {}

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/default.png';
  }

  goToDetail() {
    this.router.navigate(['/series', this.serie.publicId]);
  }
}
