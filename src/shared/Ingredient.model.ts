export class Ingredient {
  constructor(
    public name: string,
    public number = 0,
    public price: number,
    public imageUrl: string,
  ) {}
}
