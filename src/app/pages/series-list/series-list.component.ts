import { Component, OnInit } from '@angular/core';
import { Series } from '../../models/series.model';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent implements OnInit{

  series: Series[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getAll().subscribe(data => {
      this.series = data;
      console.log(this.series);
    });
  }
}
