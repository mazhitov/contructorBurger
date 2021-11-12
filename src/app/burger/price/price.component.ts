import {Component, Input} from '@angular/core';
import {Ingredient} from "../../../shared/Ingredient.model";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent  {
  @Input() ingredients:Ingredient[] = [];
  burgerPrice = 20;

  getTotal() {
    return this.ingredients.reduce((acc, item) => {
      return acc + item.getPrice();
    }, 0);
  }
  getPrice() {
    return this.getTotal() + this.burgerPrice;
  }
}
