import {Component, Input} from '@angular/core';
import {Ingredient} from "../../shared/Ingredient.model";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() ingredients!:Ingredient[];


  onClickIcon(index: number) {
    this.ingredients[index].number++;
  }

  onDelete(index: number) {
    this.ingredients[index].number--;
    if (this.ingredients[index].number <= 0) {
      this.ingredients[index].number = 0;
    }
  }

}
