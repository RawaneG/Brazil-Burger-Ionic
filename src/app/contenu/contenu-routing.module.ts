import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenuPage } from './contenu.page';

const routes: Routes = [
  {
    path: '',
    component: ContenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenuPageRoutingModule {}
