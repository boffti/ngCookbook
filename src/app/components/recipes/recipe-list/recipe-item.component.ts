import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
    moduleId:'moduleId',
    selector: 'recipe-item',
    templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
   @Input() recipe: Recipe;
    recipeId: number;
}
