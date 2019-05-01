import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.signupFormGroup = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'emailAddress': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'phoneNumber': ['', Validators.required]
    });

   }

  ngOnInit() {
  }

  onCreateAccount(form: FormGroup) {
    if ( form.dirty && form.valid ) {
      console.dir(form.value);
    }
  }
}
