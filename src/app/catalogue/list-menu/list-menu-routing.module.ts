import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMenuPage } from './list-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ListMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMenuPageRoutingModule {}
