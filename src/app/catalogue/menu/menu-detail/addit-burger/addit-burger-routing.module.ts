import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditBurgerPage } from './addit-burger.page';

const routes: Routes = [
  {
    path: '',
    component: AdditBurgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditBurgerPageRoutingModule {}
