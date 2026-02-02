import { Rating } from "../enums/rating.enum";

export interface SeriesFilter {
  rating?: Rating;
  yearWatch?: number;
  genres?: number[];
  name?: string;
}
