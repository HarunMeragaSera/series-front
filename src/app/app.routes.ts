import { Routes } from '@angular/router';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';
import { SeriesCreateComponent } from './pages/series-create/series-create.component';
import { SeriesUpdateComponent } from './pages/series-update/series-update.component';
import { ListsComponent } from './pages/lists/lists.component';

export const routes: Routes = [
  { path: '', redirectTo: 'series', pathMatch: 'full' },
  { path: 'series', component: SeriesListComponent },
  {path: 'series/create', component: SeriesCreateComponent},
  {path: 'series/update/:publicId', component: SeriesUpdateComponent},
  {path: 'series/:publicId', component: SeriesDetailComponent},
  {path:'lists', component: ListsComponent}
];
