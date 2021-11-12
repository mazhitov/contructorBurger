import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { PriceComponent } from './burger/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    IngredientsComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
