import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

export function firstPasswordValidator(
  control: FormControl
): { [key: string]: boolean } {
  const valid = _.isString(control.value) && control.value.length > 6;
  if (!valid) {
    return { firstPasswordError: true };
  }
}
