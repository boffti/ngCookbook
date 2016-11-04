import { Component } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
    moduleId:'moduleId',
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    recipes: Recipe[] = [];

    recipe = new Recipe('Aneesh Melkot','Lorem ipsim dolor sit amet','https://avatars0.githubusercontent.com/u/7490577?v=3&s=466');

}
