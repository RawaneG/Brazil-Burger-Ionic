import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit
{

  @Input() monMenu : any;

  constructor() { }

  ngOnInit() {
  }

}
