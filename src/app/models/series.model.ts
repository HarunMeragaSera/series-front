import { Rating } from "../enums/rating.enum";

export class Series {
  constructor(
    public name: string,
    public rating: Rating,
    public yearWatch: number,
    public imageUrl?: string,
    public id?: number
  ) {}
}
