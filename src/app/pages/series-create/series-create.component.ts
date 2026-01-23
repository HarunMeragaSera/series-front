import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series-create',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './series-create.component.html',
  styleUrl: './series-create.component.css'
})
export class SeriesCreateComponent {

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) { }

}
