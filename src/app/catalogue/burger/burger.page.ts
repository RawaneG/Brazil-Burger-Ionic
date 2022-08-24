import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.page.html',
  styleUrls: ['./burger.page.scss'],
})
export class BurgerPage implements OnInit
{
  @Input() monBurger : any;

  constructor() { }

  ngOnInit() {
  }

}
