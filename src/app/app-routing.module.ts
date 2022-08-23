import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./catalogue/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'burger',
    loadChildren: () => import('./catalogue/burger/burger.module').then( m => m.BurgerPageModule)
  },
  {
    path: 'menu-detail',
    loadChildren: () => import('./catalogue/menu/menu-detail/menu-detail.module').then( m => m.MenuDetailPageModule)
  },
  {
    path: 'burger-detail',
    loadChildren: () => import('./catalogue/burger/burger-detail/burger-detail.module').then( m => m.BurgerDetailPageModule)
  }
];

@NgModule(
{
  imports:
  [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
