import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Series } from "../models/series.model";
import { SeriesCreateModel } from "../models/series_create.model";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = '/api/series';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Series[]> {
    return this.http.get<Series[]>(this.apiUrl);
  }

  getByPublicId(publicId: string): Observable<Series> {
    return this.http.get<Series>(`${this.apiUrl}/${publicId}`);
  }

  create(dto: SeriesCreateModel): Observable<Series> {
    return this.http.post<Series>(this.apiUrl, dto);
  }

  update(publicId: string, series: SeriesCreateModel): Observable<Series> {
    return this.http.post<Series>(`${this.apiUrl}/${publicId}`, series);
  }

}
