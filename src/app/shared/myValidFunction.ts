import { AbstractControl } from "@angular/forms";

export function myValidFunction(control: AbstractControl) {
  if (control.value.indexOf('Jonny') === -1) {
    return {
      ErrorCode: 1,
      ErrorMsg: 'Must include "Jonny" '
    };
  } else {
    return null;
  }
}
