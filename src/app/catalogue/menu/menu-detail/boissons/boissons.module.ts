import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoissonsPageRoutingModule } from './boissons-routing.module';

import { BoissonsPage } from './boissons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoissonsPageRoutingModule
  ],
  declarations: [BoissonsPage]
})
export class BoissonsPageModule {}
