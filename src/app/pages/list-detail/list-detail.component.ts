import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesListService } from '../../services/series_list.service';
import { SeriesListDTO } from '../../models/series_list.model';
import { SerieCardComponent } from '../../components/serie-card/serie-card.component';
import { CreateListModalComponent } from '../../components/create-list-modal/create-list-modal.component';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [SerieCardComponent,CreateListModalComponent],
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent implements OnInit {

  list: SeriesListDTO | null = null;
  id: number | null = null;
  showModal = false;

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

  openModal() {
    this.showModal = true;
  }

  append(serieId: string) {
    this.listService.addSeries(this.id!, serieId).subscribe((data) => {
        if (data) {
          this.list = data;
        }
    });
    this.showModal = false;
  }

}
