import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBurgerPage } from './list-burger.page';

const routes: Routes = [
  {
    path: '',
    component: ListBurgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBurgerPageRoutingModule {}
