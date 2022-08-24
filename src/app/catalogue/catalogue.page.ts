import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit
{
  mesBurgers: any;
  mesMenus: any;
  liste : boolean = false;
  card : boolean = true;

  constructor(private httpService : HttpService,private loadingCtrl : LoadingController) { }

  async showMessage()
  {
  const loading = await this.loadingCtrl.create(
  {
    duration: 1000,
    spinner: 'dots',
    cssClass : 'custom-loading'
  });

  loading.present();
  }
  segmentChanged(event : any)
  {
    if(event.detail.value == 'list')
    {
      this.liste = true;
      this.card = false;
    }
    else
    {
      this.liste = false;
      this.card = true;
    }
  }

  convertion(image : any)
  {
    this.httpService.convertion(image);
  }

  ngOnInit()
  {
    this.httpService.getUrl(this.httpService.burgerUrl).subscribe
    (
      (reponse) => {this.mesBurgers = reponse}
    );
    this.httpService.getUrl(this.httpService.menuUrl).subscribe
    (
      (reponse) => {this.mesMenus = reponse}
    );
  }
}
