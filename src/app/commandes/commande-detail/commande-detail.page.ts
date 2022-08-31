import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../security.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.page.html',
  styleUrls: ['./commande-detail.page.scss'],
})
export class CommandeDetailPage implements OnInit {
  parameter: number;
  maCommande: any;
  scanCode: any;
  codeQr: boolean;

  constructor(private securite : SecurityService, private actif : ActivatedRoute, private http: HttpService, private alertController : AlertController) { }
  async code(code)
  {
      const alert = this.alertController.create(
      {
        header: 'Votre code est : ' + this.maCommande?.code + '',
        buttons:
        [
          {
            text : 'Bien Reçu',
          }
        ]
      });

      (await alert).present();
  }
  scan(code)
  {
    this.codeQr = true;
  }
  ngOnInit()
  {
    this.actif.paramMap.subscribe
    (
      data =>
      {
        this.parameter = +data.get('id');
      }
    )
    this.http.getUrl(this.http.commandeUrl + '/' + this.parameter).subscribe(
      (reponse) =>
      {
        this.maCommande = reponse;
        this.scanCode = this.maCommande.code.toString();
      });
  }

}
