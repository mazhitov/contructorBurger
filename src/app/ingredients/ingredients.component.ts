import {Component} from '@angular/core';
import {Ingredient} from "../../shared/Ingredient.model";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent  {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 0, 50, '../../assets/burger/meat.png'),
    new Ingredient('Cheese', 0 , 20, '../../assets/burger/cheese.png'),
    new Ingredient('Salad', 0 , 5, '../../assets/burger/salad.png'),
    new Ingredient('Bacon', 0 , 30, '../../assets/burger/bacon.png'),
  ];

  onClickIcon(index:number) {
    this.ingredients[index].number++;
  }

}
