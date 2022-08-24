import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {
    path: '',
    redirectTo: 'contenu',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
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
  },
  {
    path: 'list-burger',
    loadChildren: () => import('./catalogue/list-burger/list-burger.module').then( m => m.ListBurgerPageModule)
  },
  {
    path: 'list-menu',
    loadChildren: () => import('./catalogue/list-menu/list-menu.module').then( m => m.ListMenuPageModule)
  },
  {
    path: 'boissons',
    loadChildren: () => import('./catalogue/menu/menu-detail/boissons/boissons.module').then( m => m.BoissonsPageModule)
  },
  {
    path: 'frites',
    loadChildren: () => import('./catalogue/menu/menu-detail/frites/frites.module').then( m => m.FritesPageModule)
  },
  {
    path: 'addit-burger',
    loadChildren: () => import('./catalogue/menu/menu-detail/addit-burger/addit-burger.module').then( m => m.AdditBurgerPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./contenu/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'contenu',
    loadChildren: () => import('./contenu/contenu.module').then( m => m.ContenuPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./contenu/authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'sidemenu',
    loadChildren: () => import('./contenu/sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./contenu/register/register.module').then( m => m.RegisterPageModule)
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
