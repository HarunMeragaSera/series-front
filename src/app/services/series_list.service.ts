import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeriesListDTO } from '../models/series_list.model';


@Injectable({
  providedIn: 'root'
})
export class SeriesListService {

  private apiUrl = '/api/series-lists';

  constructor(private http: HttpClient) { }

  create(name: string): Observable<SeriesListDTO> {
    const params = new HttpParams().set('name', name);
    return this.http.post<SeriesListDTO>(this.apiUrl, null, { params });
  }

  getById(id: number): Observable<SeriesListDTO> {
    return this.http.get<SeriesListDTO>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<SeriesListDTO[]> {
    return this.http.get<SeriesListDTO[]>(this.apiUrl);
  }

  addSeries(listId: number, seriesPublicId: string): Observable<SeriesListDTO> {
    return this.http.post<SeriesListDTO>(`${this.apiUrl}/${listId}/series/${seriesPublicId}`, null);
  }

  removeSeries(listId: number, seriesPublicId: string): Observable<SeriesListDTO> {
    return this.http.delete<SeriesListDTO>(`${this.apiUrl}/${listId}/series/${seriesPublicId}`);
  }

  delete(listId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${listId}`);
  }
}
