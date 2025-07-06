import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}

export function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: UntypedFormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
