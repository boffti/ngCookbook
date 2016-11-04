import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
    moduleId: 'moduleId',
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
   @Input() recipe: Recipe;
    recipeId: number;
}
