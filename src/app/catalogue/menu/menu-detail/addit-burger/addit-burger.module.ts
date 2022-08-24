import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditBurgerPageRoutingModule } from './addit-burger-routing.module';

import { AdditBurgerPage } from './addit-burger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditBurgerPageRoutingModule
  ],
  declarations: [AdditBurgerPage]
})
export class AdditBurgerPageModule {}
