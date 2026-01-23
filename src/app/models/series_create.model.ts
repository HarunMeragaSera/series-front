import { Rating } from "../enums/rating.enum";

export class SeriesCreateModel {
  constructor(
    name: string,
    rating?: Rating,
    imageUrl?: string,
    yearWatch?: number,
    description?: string,
    genreIds?: number[],
  ){}
}
