import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerDetailPage } from './burger-detail.page';

const routes: Routes = [
  {
    path: ':id',
    component: BurgerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerDetailPageRoutingModule {}
