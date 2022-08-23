import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerPageRoutingModule } from './burger-routing.module';

import { BurgerPage } from './burger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerPageRoutingModule
  ],
  declarations: [BurgerPage]
})
export class BurgerPageModule {}
