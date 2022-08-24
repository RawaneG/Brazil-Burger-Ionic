import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.page.html',
  styleUrls: ['./list-menu.page.scss'],
})
export class ListMenuPage implements OnInit
{

  @Input() monListMenu : any;

  constructor() { }

  ngOnInit() {
  }

}
