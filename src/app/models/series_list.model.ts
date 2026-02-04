import { Series } from "./series.model";

export interface SeriesListDTO {
  id: number;
  name: string;
  series: Series[];
}
