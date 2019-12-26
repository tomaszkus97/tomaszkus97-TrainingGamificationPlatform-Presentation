import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/internal/operators';
import { LoginModel } from './models/login-model';
import * as jwt_decode from 'jwt-decode';
import { throwError } from 'rxjs';

const USER_ROLE = 'Role';
const AUTH_TOKEN = 'auth_token';
const USER_ID = 'identity_id';

@Injectable()
export class AuthService {
    private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').append('Accept', 'application/json');

    private baseUrl = 'http://localhost:5001/api/Identity';
    constructor( private http: HttpClient, private router: Router) {}

    login(credentials :LoginModel) {
        return this.http.post<string>(this.baseUrl + '/sign-in', credentials, {headers: this.headers})
          .pipe(
            tap(response => {
              localStorage.setItem(AUTH_TOKEN, response);
              const decodedToken = jwt_decode(response);
              localStorage.setItem(USER_ID, decodedToken[USER_ID]);
              localStorage.setItem(USER_ROLE, decodedToken[USER_ROLE]);
              console.log(decodedToken[USER_ROLE]);

              this.router.navigate([decodedToken[USER_ROLE]]);
            }),
            catchError(error => {
              return throwError(error);
            })
          );
      }

}