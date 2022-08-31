import { Component, OnInit } from '@angular/core';
import { SecurityService } from './security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  constructor(private securite : SecurityService, private route : Router) {}

  role ?: any;

  deconnexion()
  {
    this.securite.deconnecter();
  }
  ngOnInit(): void
  {
    if(this.securite.identifier())
    {
        this.role = this.securite.getRole()[0];
    }
    else
    {
      this.role = null;
    }
  }
}
