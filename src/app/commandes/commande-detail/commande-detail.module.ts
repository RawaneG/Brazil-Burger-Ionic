import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandeDetailPageRoutingModule } from './commande-detail-routing.module';

import { CommandeDetailPage } from './commande-detail.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports:
  [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandeDetailPageRoutingModule,
    QRCodeModule
  ],
  declarations: [CommandeDetailPage]
})
export class CommandeDetailPageModule {}
