import { Component } from '@angular/core';
import {Ingredient} from "../shared/Ingredient.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 0, 50, '../../assets/burger/meat.png'),
    new Ingredient('Cheese', 0, 20, '../../assets/burger/cheese.png'),
    new Ingredient('Salad', 0, 5, '../../assets/burger/salad.png'),
    new Ingredient('Bacon', 0, 30, '../../assets/burger/bacon.png'),
  ];

}
