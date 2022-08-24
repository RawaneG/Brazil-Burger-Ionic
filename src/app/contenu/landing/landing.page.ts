import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit
{
  @Input() landing : any;

  constructor() { }

  ngOnInit() {
  }

}
