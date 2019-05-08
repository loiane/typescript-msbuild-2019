import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthType } from './model/auth-type';
import { AuthDTO } from './model/auth.dto';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private readonly API = environment.baseUrl + '/auth';
  private readonly TOKEN = 'ts_coffee_token';

  private $isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    if (this.token) {
      this.$isLoggedIn.next(true);
    }
  }

  get token() {
    return localStorage.getItem(this.TOKEN);
  }

  set token(val: string) {
    if (val) {
      localStorage.setItem(this.token, val);
    } else {
      localStorage.clear();
    }
  }

  auth(authType: AuthType, data: AuthDTO) {
    return this.http.post<User>(`${this.API}/${authType}`, data).pipe(
      tap((user: User) => {
        this.token = user.token;
        this.$isLoggedIn.next(true);
      })
    );
  }

  isLoggedIn() {
    return this.$isLoggedIn.asObservable();
  }

  canActivate() {
    if (this.token) {
      return true;
    }
    return false;
  }
}
