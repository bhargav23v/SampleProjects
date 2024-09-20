import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

export function confirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        console.log('hi');
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        //     // return if another validator has already found an error on the matchingControl
        //     return;
        // }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
    };
}
