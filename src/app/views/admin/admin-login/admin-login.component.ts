import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  password: string;
  username: string;
  enableButton: boolean;
  logOutFlag: boolean;
  dataObtained: any;
  public show: boolean = false;

  public signinData: {
    username: string,
    password: string,
    multidomain: string,
    rememberMe: boolean
  } = {
      username: '',
      password: '',
      multidomain: '',
      rememberMe: false
    };
  private HTTP_REQUEST_PARAMS = {
    HEADER_CONTENT_TYPE: { value: 'application/json; charset=UTF-8', valueContains: 'application/json;' }
  };
  public signinForm: FormGroup;
  public validation_messages = {
    'username': [
      { type: 'required', message: 'Username Required' }

    ],
    'password': [
      { type: 'required', message: 'Password required' }

    ]
  };

  constructor(public router: Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required])),
      rememberMe: new FormControl("")
    });

  }

  adminlogin() {
    this.router.navigate(['data']);
  }
}
