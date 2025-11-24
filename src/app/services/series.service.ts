import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Series } from "../models/series.model";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = '/api/series';

  constructor(private http: HttpClient) {}

  // Obtener todas las series
  getAll(): Observable<Series[]> {
    return this.http.get<Series[]>(this.apiUrl);
  }
}
