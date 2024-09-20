import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { firstPasswordValidator } from '../common/firstPassword-validator';
import { secondPasswordValidator } from '../common/secondPassword-validator';
import { thirdPasswordValidator } from '../common/thirdPassword-validator';
import { fourthPasswordValidator } from '../common/fourthPassword-validator';
import { confirmPasswordValidator } from '../common/confirmPassword-validator';
import { numberValidator } from '../common/number-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('divClick') divClick: ElementRef;
  html = `<span class="btn-block btn-danger well-sm">Never trust not sanitized HTML!!!</span>`;
  registerFormGroup: FormGroup;
  registeredData: any[] = ['apple'];
  users: any;

  constructor(fb: FormBuilder) {
    this.registerFormGroup = fb.group(
      {
        firstName: ['', Validators.compose([Validators.required])],
        surName: ['', Validators.compose([Validators.required])],
        enterLogin: [
          '',
          Validators.compose([Validators.required, Validators.email])
        ],
        enterPassword: [
          '',
          Validators.compose([
            Validators.required,
            firstPasswordValidator,
            secondPasswordValidator,
            thirdPasswordValidator,
            fourthPasswordValidator
          ])
        ],
        confirmPassword: ['', Validators.compose([Validators.required])],
        phoneNumber: [
          '',
          Validators.compose([Validators.required, numberValidator])
        ]
      },
      {
        validator: confirmPasswordValidator('enterPassword', 'confirmPassword')
      }
    );
  }

  ngOnInit() {
  }
  onClear(): void {
    localStorage.clear();
  }
  get f() {
    return this.registerFormGroup.controls;
  }
  onSubmit(formgroup: FormGroup) {
    if (formgroup.dirty && formgroup.valid) {
      console.dir(formgroup.value);
      this.users = formgroup.value.firstName;
      const temp: any[] = JSON.parse(localStorage.getItem('getData') || '[]');
      console.dir(this.users);
      temp.push(this.users);
      localStorage['getData'] = JSON.stringify(temp);
    }
  }
}
