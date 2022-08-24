import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  @Input() form : any;

  constructor() { }

  ngOnInit() {
  }

}
