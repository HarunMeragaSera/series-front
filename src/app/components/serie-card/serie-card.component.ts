import { Component, Input } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Series } from '../../models/series.model';

@Component({
  selector: 'series-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})

export class SerieCardComponent {

  @Input() series!: Series;
}
