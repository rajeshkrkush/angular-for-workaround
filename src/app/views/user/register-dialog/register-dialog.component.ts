import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
  isValidated: boolean;
  name: string;
  mobilenumber: string;
  enableButton: boolean;
  logOutFlag: boolean;
  dataObtained: any;
  public signinForm: FormGroup;
  public signinData: {
    name: string,
    mobilenumber: string
  } = {
      name: '',
      mobilenumber: ''
    };

  public validation_messages = {
    'name': [
      { type: 'required', message: 'Name required' }

    ],
    'mobilenumber': [
      { type: 'required', message: 'Mobile Number required' }

    ]
  };

  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>,
    private router: Router, @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    this.logOutFlag = false;
    this.isValidated = false;
    this.dataObtained = data;
    this.dataObtained.title = data.title;
    this.enableButton = false;

  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required])),
      mobilenumber: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  login() {
    this.signinData.name = this.signinData.name.toLowerCase();
    this.dialogRef.close();

  }
}
