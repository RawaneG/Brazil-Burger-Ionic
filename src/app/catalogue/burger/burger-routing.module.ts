import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerPage } from './burger.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerPageRoutingModule {}
