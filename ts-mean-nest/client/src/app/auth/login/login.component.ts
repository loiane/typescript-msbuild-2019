import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BaseForm } from '../../shared/form/base-form';
import { AuthService } from '../auth.service';
import { AuthType } from '../model/auth-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent extends BaseForm implements OnInit {

  error: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.auth('login', this.form.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    } else {
      this.error = null;
      this.validateAllFormFields(this.form);
    }
  }

  onError(event) {
    console.log(event);
  }

}
