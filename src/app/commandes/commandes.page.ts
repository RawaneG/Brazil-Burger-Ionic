import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.page.html',
  styleUrls: ['./commandes.page.scss'],
})
export class CommandesPage implements OnInit
{
  emailClient: any;
  mesClients: any;
  clientConnecte: any;

  constructor(private securite : SecurityService, private http : HttpService) { }

  ngOnInit()
  {
    this.emailClient = this.securite.getEmail();
    this.http.getUrl(this.http.commandeUrl).subscribe
    (
      data =>
      {
        this.mesClients = data;
        this.clientConnecte = this.mesClients.find(client => client.client.login === this.emailClient);
      }
    );
  }

}
