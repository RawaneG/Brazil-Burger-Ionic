import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerDetailPageRoutingModule } from './burger-detail-routing.module';

import { BurgerDetailPage } from './burger-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerDetailPageRoutingModule
  ],
  declarations: [BurgerDetailPage]
})
export class BurgerDetailPageModule {}
