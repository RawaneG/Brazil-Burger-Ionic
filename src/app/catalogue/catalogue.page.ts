import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit
{
  mesBurgers: any;
  mesMenus: any;

  constructor(private httpService : HttpService) { }

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
