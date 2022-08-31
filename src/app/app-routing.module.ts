import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from './security.guard';

const routes: Routes =
[
  {
    path: '',
    redirectTo: 'contenu',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule),
  },
  {
    path: 'menu',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'burger',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/burger/burger.module').then( m => m.BurgerPageModule)
  },
  {
    path: 'menu-detail',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/menu/menu-detail/menu-detail.module').then( m => m.MenuDetailPageModule)
  },
  {
    path: 'burger-detail',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/burger/burger-detail/burger-detail.module').then( m => m.BurgerDetailPageModule)
  },
  {
    path: 'list-burger',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/list-burger/list-burger.module').then( m => m.ListBurgerPageModule)
  },
  {
    path: 'list-menu',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/list-menu/list-menu.module').then( m => m.ListMenuPageModule)
  },
  {
    path: 'boissons',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/menu/menu-detail/boissons/boissons.module').then( m => m.BoissonsPageModule)
  },
  {
    path: 'frites',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/menu/menu-detail/frites/frites.module').then( m => m.FritesPageModule)
  },
  {
    path: 'addit-burger',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./catalogue/menu/menu-detail/addit-burger/addit-burger.module').then( m => m.AdditBurgerPageModule)
  },
  {
    path: 'landing',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./contenu/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'contenu',
    loadChildren: () => import('./contenu/contenu.module').then( m => m.ContenuPageModule),
  },
  {
    path: 'authentification',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./contenu/authentification/authentification.module').then( m => m.AuthentificationPageModule),
  },
  {
    path: 'register',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./contenu/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'livraison',
    canActivate : [SecurityGuard],
    loadChildren: () => import('./livraison/livraison.module').then( m => m.LivraisonPageModule)
  },
  {
    path: 'livraison-detail',
    loadChildren: () => import('./livraison/livraison-detail/livraison-detail.module').then( m => m.LivraisonDetailPageModule)
  },
  {
    path: 'commandes',
    loadChildren: () => import('./commandes/commandes.module').then( m => m.CommandesPageModule)
  },
  {
    path: 'commande-detail',
    loadChildren: () => import('./commandes/commande-detail/commande-detail.module').then( m => m.CommandeDetailPageModule)
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
