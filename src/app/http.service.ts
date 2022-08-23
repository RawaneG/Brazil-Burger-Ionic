import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable(
{
  providedIn: 'root'
})
export class HttpService
{
  constructor(private http : HttpClient, private sanitaire : DomSanitizer) { }

  burgerUrl = "https://127.0.0.1:8000/api/burgers";
  menuUrl = "https://127.0.0.1:8000/api/menus";
  boissonsUrl = "https://127.0.0.1:8000/api/boissons";
  zoneUrl = "https://127.0.0.1:8000/api/zones";
  commandeUrl = "https://127.0.0.1:8000/api/commandes";
  commandeId = "https://127.0.0.1:8000/api/commandes/";
  livreurUrl = "https://127.0.0.1:8000/api/livreurs";
  livraisonUrl = "https://127.0.0.1:8000/api/livraisons";
  fritesUrl = "https://127.0.0.1:8000/api/frites";

  getUrl(url : any) : Observable<any>
  {
    return this.http.get<any[]>(url);
  }
  convertion(image : any)
  {
    return this.sanitaire.bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
  }
  getElementById(id : number, tableau : any)
  {
    return tableau.find((param : any) => param.id === id);
  }
}
