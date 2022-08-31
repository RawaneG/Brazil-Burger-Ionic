import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContenuPageRoutingModule } from './contenu-routing.module';
import { ContenuPage } from './contenu.page';
import { LandingPage } from './landing/landing.page';
import { AuthentificationPage } from './authentification/authentification.page';
import { AuthentificationPageModule } from './authentification/authentification.module';
import { LandingPageModule } from './landing/landing.module';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContenuPageRoutingModule,
    AuthentificationPageModule,
    LandingPageModule,
    IonicHeaderParallaxModule
  ],
  declarations: [ContenuPage,LandingPage, AuthentificationPage],
  exports:[LandingPage, AuthentificationPage]
})
export class ContenuPageModule {}
