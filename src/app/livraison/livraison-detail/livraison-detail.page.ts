import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../security.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpService } from '../../http.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.page.html',
  styleUrls: ['./livraison-detail.page.scss'],
})
export class LivraisonDetailPage implements OnInit {
  parameter: any;
  maLivraison: any;
  myCode: any;
  codeTapee : any;
  constructor(private securite : SecurityService, private actif : ActivatedRoute, private http: HttpService, private alertController : AlertController) { }
  async code(code)
  {
      const alert = this.alertController.create(
      {
        header: 'Validation par code : ',
        buttons:
        [
          {
            text : 'Valider',
            handler : data =>
            {
              this.codeTapee = +data[0];
            }
          }
        ],
        inputs: [
          {
            placeholder: 'Votre code ici',
            type:'number',
            attributes:
            {
              minlength : 4,
              maxlength: 4,
            },
          }
        ],
      });

      (await alert).present();
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
    this.http.getUrl(this.http.livraisonUrl + '/' + this.parameter).subscribe(
      (reponse) =>
      {
        this.maLivraison = reponse;
      });
  }

}
