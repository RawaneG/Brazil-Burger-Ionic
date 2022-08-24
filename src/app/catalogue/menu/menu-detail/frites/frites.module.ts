import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FritesPageRoutingModule } from './frites-routing.module';

import { FritesPage } from './frites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FritesPageRoutingModule
  ],
  declarations: [FritesPage]
})
export class FritesPageModule {}
