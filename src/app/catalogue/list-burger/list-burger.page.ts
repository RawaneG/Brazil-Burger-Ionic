import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-burger',
  templateUrl: './list-burger.page.html',
  styleUrls: ['./list-burger.page.scss'],
})
export class ListBurgerPage implements OnInit
{

  @Input() monListBurger : any;

  constructor() { }

  ngOnInit() {
  }

}
