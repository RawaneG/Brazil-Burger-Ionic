import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit
{
  maQuantiteTotale !: number;
  autreMenus !: any;
  menuSuggestions !: any;
  qteTotal = 0;
  somme !: number;
  quantite : any[]= [];
  bsonChoisie : any[] = [];
  cachee : boolean = true;
  monMenu : any = [];
  parameter !: any;
  ajoutee !: any;
  @Input() mesBoissons !: any;

  message(event : any)
  {
    this.maQuantiteTotale = event;
  }
  constructor( private sanitaire : DomSanitizer, private route: ActivatedRoute, private router: Router, private httpService: HttpService) { }

  /* AJOUTER AU PANIER */
  // addToCart(product: any)
  // {
  //     this.cartService.items$.subscribe
  //     (
  //       value =>
  //       {
  //         this.ajoutee = value.find(prod => prod.id === product.id);

  //         if (this.ajoutee === undefined)
  //         {
  //           product.Boissons = this.bsonChoisie;
  //           this.cartService.addToCart(product);
  //           this.bsonChoisie = [];
  //           localStorage.setItem('boissonsChoisies', JSON.stringify(this.bsonChoisie));
  //         }
  //         else
  //         {
  //           this.ajoutee.quantite++;
  //           this.cartService.saveEtat('produits',this.cartService.items$);
  //         }
  //       }
  //     );
  // }
  ngOnInit(): void
  {
    this.route.paramMap.subscribe(a =>
      {
        this.parameter = a.get('id')
      });
    this.httpService.getUrl(this.httpService.menuUrl).subscribe(
        (reponse) =>
        {
          this.monMenu = reponse;
          this.autreMenus = reponse;
          this.monMenu = this.httpService.getElementById(+this.parameter, this.monMenu);
          this.monMenu.Boissons.forEach((element : any) =>
          {
            this.qteTotal += element.quantite;
          });
          this.somme = this.qteTotal;
        });
  }

}
