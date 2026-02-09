import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesListService } from '../../services/series_list.service';
import { SeriesListDTO } from '../../models/series_list.model';
import { SerieCardComponent } from '../../components/serie-card/serie-card.component';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [SerieCardComponent],
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent implements OnInit {

  list: SeriesListDTO | null = null;
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listService: SeriesListService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));;
    this.listService.getById(this.id).subscribe(list => {
      if (list) {
        this.list = list;
      }
    });
  }

  onDeleteSerie(publicId: string) {
    this.listService.removeSeries(this.id!, publicId).subscribe(() => {
      this.list = this.list ? { ...this.list, series: this.list.series.filter(s => s.publicId !== publicId) } : null;
    });
  }
  
}
