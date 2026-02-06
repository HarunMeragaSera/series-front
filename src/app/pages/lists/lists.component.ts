import { Component, OnInit } from '@angular/core';
import { SeriesListService } from '../../services/series_list.service';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeriesListDTO } from '../../models/series_list.model';
import { CreateListModalComponent } from '../../components/create-list-modal/create-list-modal.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [TranslateModule,CreateListModalComponent,MatIconModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit {

  lists: SeriesListDTO[] = [];
  showModal = false;

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

  openModal() {
    this.showModal = true;
  }

  handleCreateList(name: string) {
    this.listService.create(name).subscribe(newList => {
      this.lists.push(newList);
      this.showModal = false;
    });
  }

  delete(list: SeriesListDTO) {
    this.listService.delete(list.id).subscribe(() => {
      this.lists = this.lists.filter(l => l.id !== list.id);
    });
  }

}
