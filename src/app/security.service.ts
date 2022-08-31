import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Route, Router } from '@angular/router';


@Injectable(
{
  providedIn: 'root'
})

export class SecurityService
{
  constructor(private http : HttpClient, private route : Router) { }

  user : any;
  myUser : any;
  loginUrl = "https://127.0.0.1:8000/api/login";

  login(body : any)
  {
    this.http.post(this.loginUrl, body).subscribe
    (
      token =>
      {
        this.myUser = this.getDecodedAccessToken(JSON.stringify(token));
        if(this.myUser != undefined)
        {
          localStorage.setItem('ACCESS_TOKEN', JSON.stringify(this.myUser));
          this.route.navigateByUrl('catalogue');
        }
      }
    )
  }
  getRole()
  {
    this.user = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));
    if(this.user !==null)
    {
      return this.user.roles;
    }
    else
    {
      return this.user = null;
    }
  }
  getEmail()
  {
    this.user = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));
    if(this.user !==null)
    {
      return this.user.username;
    }
    else
    {
      return this.user = null;
    }
  }
  identifier()
  {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  deconnecter()
  {
    localStorage.removeItem('ACCESS_TOKEN');
  }
  getDecodedAccessToken(token: string): any
  {
    try
    {
      return jwt_decode(token);
    }
    catch(Error)
    {
      return null;
    }
  }
}
