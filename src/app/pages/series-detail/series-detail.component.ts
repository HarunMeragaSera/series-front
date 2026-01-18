import { Component, OnInit } from '@angular/core';
import { TranslateService,TranslateModule } from '@ngx-translate/core';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute } from '@angular/router';
import { Series } from '../../models/series.model';

@Component({
  selector: 'app-series-detail',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './series-detail.component.html',
  styleUrl: './series-detail.component.css'
})
export class SeriesDetailComponent implements OnInit {

  serie!: Series;
  message?: string;

  constructor(
    private seriesService: SeriesService,
    private translate: TranslateService,
    private route: ActivatedRoute,
  ) { }

    ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const publicId = params.get('publicId');
      if (publicId) {
        this.loadSerie(publicId);
      }
    });
  }

  loadSerie(publicId: string) {
    this.seriesService.getByPublicId(publicId).subscribe({
      next: data => this.serie = data,
      error: err => console.error('Serie no encontrada', err)
    });
  }
}
