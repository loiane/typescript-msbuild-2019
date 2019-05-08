import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { AppErrorStateMatcher } from './app-error-state-matcher';

export class BaseForm {

  form: FormGroup;
  matcher = new AppErrorStateMatcher();

  isFieldRequired(field: string) {
    return this.form.get(field).hasError('required');
  }

  isEmailValid(field: string) {
    return this.form.get(field).hasError('email') && !this.form.get(field).hasError('required');
  }

  validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        control.markAsTouched({ onlySelf: true });
        this.validateAllFormFields(control);
      }
    });
  }
}
