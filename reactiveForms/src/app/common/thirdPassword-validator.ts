import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

export function thirdPasswordValidator(
  control: FormControl
): { [key: string]: boolean } {
  const valid = control.value.match(/[A-Z]/g); // /[!@#$%^&*(),.?":{}|<>]/g
  if (!valid) {
    return { thirdPasswordError: true };
  }
}
