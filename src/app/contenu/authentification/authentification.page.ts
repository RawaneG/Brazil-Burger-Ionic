import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../../security.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  @Input() form : any;

  myForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private securite : SecurityService) { }

  login()
  {
    this.securite.login(this.myForm.value);
  }
  ngOnInit()
  {
    this.myForm = this.formBuilder.group(
      {
        username : ['' ,[Validators.required]],
        password : ['' ,[Validators.required]]
      }
    )
  }

}
