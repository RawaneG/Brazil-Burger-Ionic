import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FritesPage } from './frites.page';

const routes: Routes = [
  {
    path: '',
    component: FritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FritesPageRoutingModule {}
