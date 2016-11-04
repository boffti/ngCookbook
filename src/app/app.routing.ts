import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';

const appRoutes: Routes = [
    {
        path:'',
        component:RecipesComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);