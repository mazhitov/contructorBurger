import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ingredient} from "../../shared/Ingredient.model";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() ingredients!:Ingredient[];
  @Output() changeNumberOfIngredients = new EventEmitter<Ingredient[]>();

  onClickIcon(index: number) {
    this.ingredients[index].number++;
    this.changeNumberOfIngredients.emit(this.ingredients);
  }

  onDelete(index: number) {
    this.ingredients[index].number--;
    if (this.ingredients[index].number <= 0) {
      this.ingredients[index].number = 0;
    }
    this.changeNumberOfIngredients.emit(this.ingredients);
  }

}
