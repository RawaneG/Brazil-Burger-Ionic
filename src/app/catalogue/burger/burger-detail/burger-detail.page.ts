import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.page.html',
  styleUrls: ['./burger-detail.page.scss'],
})
export class BurgerDetailPage implements OnInit
{
  quantiteActuelle = 0;
  beureukh : number = 0;
  monBurger : any = [];
  parameter !: any;
  ajoutee !: any;
  mesBoissons : any;

  constructor(private sanitaire : DomSanitizer, private route : ActivatedRoute, private router : Router, private httpService : HttpService)
  {

  }
  convertion(image : any)
  {
    this.httpService.convertion(image);
  }
  ngOnInit()
  {
    this.route.paramMap.subscribe(a =>
      {
      this.parameter = a.get('id');
      });
    this.httpService.getUrl(this.httpService.burgerUrl).subscribe(
      (reponse) =>
      {
        this.monBurger = reponse
        this.monBurger = this.httpService.getElementById(+this.parameter, this.monBurger);
      });
    this.httpService.getUrl(this.httpService.boissonsUrl).subscribe((reponse) =>
      {
        this.mesBoissons = reponse
      });
  }
  /* AJOUTER AU PANIER */
  // addToCart(product : any)
  // {
  //   this.cartService.items$.subscribe
  //   (
  //     value =>
  //     {
  //       this.ajoutee = value.find(prod => prod.id === product.id);
  //       if (this.ajoutee === undefined)
  //       {
  //         this.cartService.addToCart(product);
  //       }
  //       else
  //       {
  //         this.ajoutee.quantite++;
  //         this.cartService.saveEtat('produits',this.cartService.items$);
  //       }
  //     }
  //   );
  // }
  /* INCREMENTATION QUANTITE COMPLEMENTS */
  // incremente(product : any)
  // {
  //   this.beureukh++;
  //   let input = document.querySelectorAll('.span');
  //   input.forEach(a => this.quantiteActuelle += (+a.innerHTML));
  //   this.quantiteActuelle = 0;
  // }
  /* DECREMENTATION QUANTITE COMPLEMENTS */
  // decremente(product : any)
  // {
  //   if(this.beureukh > 0)
  //   {
  //     this.beureukh--;
  //     let input = document.querySelectorAll('.span');
  //     input.forEach(a => this.quantiteActuelle += (+a.innerHTML));
  //     this.quantiteActuelle = 0;
  //   }
  //   else
  //   {
  //     return;
  //   }
  // }
}
