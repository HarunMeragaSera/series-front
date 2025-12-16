import { Component, OnInit } from '@angular/core';
import { Series } from '../../models/series.model';
import { SeriesService } from '../../services/series.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SerieCardComponent } from '../../components/serie-card/serie-card.component';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [TranslateModule,SerieCardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent implements OnInit{

  series: Series[] = [];

  constructor(private seriesService: SeriesService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.seriesService.getAll().subscribe(data => {
      this.series = data;
    });
  }
}
