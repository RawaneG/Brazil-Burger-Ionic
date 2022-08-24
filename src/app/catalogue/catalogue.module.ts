import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CataloguePageRoutingModule } from './catalogue-routing.module';
import { CataloguePage } from './catalogue.page';
import { MenuPage } from './menu/menu.page';
import { ListBurgerPage } from './list-burger/list-burger.page';
import { ListMenuPage } from './list-menu/list-menu.page';
import { BurgerPage } from './burger/burger.page';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { MenuPageModule } from './menu/menu.module';
import { BurgerPageModule } from './burger/burger.module';
import { SidemenuPage } from '../contenu/sidemenu/sidemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    IonicHeaderParallaxModule
  ],
  declarations: [CataloguePage,MenuPage,BurgerPage,ListBurgerPage,ListMenuPage,SidemenuPage],
  exports:[MenuPage,BurgerPage,ListBurgerPage,ListMenuPage,SidemenuPage]
})
export class CataloguePageModule {}
