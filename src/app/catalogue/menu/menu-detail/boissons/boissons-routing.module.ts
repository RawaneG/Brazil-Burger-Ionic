import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoissonsPage } from './boissons.page';

const routes: Routes = [
  {
    path: '',
    component: BoissonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoissonsPageRoutingModule {}
