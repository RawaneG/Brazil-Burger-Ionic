import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContenuPageRoutingModule } from './contenu-routing.module';
import { ContenuPage } from './contenu.page';
import { LandingPage } from './landing/landing.page';
import { AuthentificationPage } from './authentification/authentification.page';
import { AuthentificationPageModule } from './authentification/authentification.module';
import { LandingPageModule } from './landing/landing.module';
import { SidemenuPage } from './sidemenu/sidemenu.page';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenuPageRoutingModule,
    AuthentificationPageModule,
    LandingPageModule,
    IonicHeaderParallaxModule
  ],
  declarations: [ContenuPage,LandingPage, AuthentificationPage,SidemenuPage],
  exports:[LandingPage, AuthentificationPage,SidemenuPage]
})
export class ContenuPageModule {}
