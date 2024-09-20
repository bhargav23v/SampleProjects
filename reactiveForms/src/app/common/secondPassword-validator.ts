import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

export function secondPasswordValidator(
  control: FormControl
): { [key: string]: boolean } {
  const valid = control.value.match(/\d/);
  if (!valid) {
    return { secondPasswordError: true };
  }
}
