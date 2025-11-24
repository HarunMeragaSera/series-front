import { Rating } from "../enums/rating.enum";

export class Series {
  constructor(
    public name: string,
    public rating: Rating,
    public imageUrl?: string,
    public id?: number
  ) {}
}
