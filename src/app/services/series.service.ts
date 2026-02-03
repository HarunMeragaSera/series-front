import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Series } from "../models/series.model";
import { SeriesCreateModel } from "../models/series_create.model";
import { SeriesFilter } from "../models/series_filter.model";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = '/api/series';

  constructor(private http: HttpClient) { }

  getAll(filter?: SeriesFilter): Observable<Series[]> {
    let params = new HttpParams();

    if (!filter) {
      return this.http.get<Series[]>(this.apiUrl);
    }

    Object.entries(filter).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        return;
      }

      if (Array.isArray(value)) {
        value.forEach(v => {
          params = params.append(key, v.toString());
        });
      } else {
        params = params.set(key, value.toString());
      }
    });

    return this.http.get<Series[]>(this.apiUrl, { params });
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

  deleteByPublicId(publicId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${publicId}`);
  }

}
