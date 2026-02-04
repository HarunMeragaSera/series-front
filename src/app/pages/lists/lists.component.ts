import { Component, OnInit } from '@angular/core';
import { SeriesListService } from '../../services/series_list.service';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeriesListDTO } from '../../models/series_list.model';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {

  lists: SeriesListDTO[] = [];

  constructor(
    private listService: SeriesListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.listService.getAll().subscribe(data => {
      this.lists = data;
      console.log(this.lists);
    });
  }

}
