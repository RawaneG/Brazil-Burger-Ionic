import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandeDetailPage } from './commande-detail.page';

const routes: Routes = [
  {
    path: ':id',
    component: CommandeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandeDetailPageRoutingModule {}
