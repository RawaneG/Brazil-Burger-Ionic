import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit
{
  emailLivreur : any;
  mesLivreurs : any;
  livreurConnecte : any;
  mesLivraisons : any;
  role: any;
  constructor(private securite : SecurityService, private http : HttpService) { }

  ngOnInit()
  {
    this.emailLivreur = this.securite.getEmail();
    this.http.getUrl(this.http.livreurUrl).subscribe
    (
      data =>
      {
        this.mesLivreurs = data;
        this.livreurConnecte = this.mesLivreurs.find(livreur => livreur.login === this.emailLivreur);
        this.mesLivraisons = this.livreurConnecte.livraisons;
      }
    );
  }

}
