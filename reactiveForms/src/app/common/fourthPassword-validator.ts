import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

export function fourthPasswordValidator(
  control: FormControl
): { [key: string]: boolean } {
  const valid = control.value.match(/[!@#$%^&*(),.?":{}|<>]/g);
  if (!valid) {
    return { fourthPasswordError: true };
  }
}
