import { Component, OnInit } from '@angular/core';
import { Series } from '../../models/series.model';
import { SeriesService } from '../../services/series.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SerieCardComponent } from '../../components/serie-card/serie-card.component';
import { Router } from '@angular/router';
import { SeriesFilter } from '../../models/series_filter.model';
import { SeriesFiltersComponent } from '../../components/series-filters/series-filters.component';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [TranslateModule, SerieCardComponent, SeriesFiltersComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent implements OnInit {

  series: Series[] = [];

  constructor(
    private seriesService: SeriesService,
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.seriesService.getAll().subscribe(data => {
      this.series = data;
    });
  }
  openCreateSeries() {
    this.router.navigate(['/series/create']);
  }

  loadSeries(filters: SeriesFilter) {
    this.seriesService.getAll(filters).subscribe(series => {
      this.series = series;
    });
  }

  onDeleteSerie(publicId: string) {
    this.series = this.series.filter(serie => serie.publicId !== publicId);
  }
}
