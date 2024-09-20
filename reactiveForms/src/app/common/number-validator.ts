import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

export function numberValidator(
  control: FormControl
): { [key: string]: boolean } {
  // const num = _.toNumber(control.value);
  //  const num = +control.value;

  const num = _.toNumber(control.value);
  const valid = !_.isNaN(num);

  // const valid = !value; // _.isNumber(num);
  if (!valid) {
    return { numberError: true };
  }
}
