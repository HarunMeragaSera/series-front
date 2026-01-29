import { Rating } from "../enums/rating.enum";

export class Series {
  constructor(
    public name: string,
    public rating: Rating,
    public yearWatch: number,
    public description?: string,
    public imageUrl?: string,
    public publicId?: string,
    public genres?: number[]
  ) {}
}
