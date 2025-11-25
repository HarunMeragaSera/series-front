import { Component, OnInit } from '@angular/core';
import { Series } from '../../models/series.model';
import { SeriesService } from '../../services/series.service';
import { TranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent implements OnInit{

  series: Series[] = [];

  constructor(private seriesService: SeriesService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.seriesService.getAll().subscribe(data => {
      this.series = data;
      console.log(this.series);
    });
  }
}
