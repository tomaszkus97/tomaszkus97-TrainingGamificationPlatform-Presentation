import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/internal/operators';
import { LoginModel } from './models/login-model';
import * as jwt_decode from 'jwt-decode';
import { throwError, of, Observable } from 'rxjs';
import { CurrentUserModel } from './models/current-user-model';

const USER_ROLE = 'Role';
const AUTH_TOKEN = 'Token';
const USER_ID = 'Id';
const USER_NAME = 'Name';

@Injectable()
export class AuthService {
    private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').append('Accept', 'application/json');

    private baseUrl = 'http://localhost:5000/api/Identity';
    constructor( private http: HttpClient, private router: Router) {}

    private currentUser: CurrentUserModel = null;

    login(credentials :LoginModel) {
        return this.http.post<string>(this.baseUrl + '/sign-in', credentials, {headers: this.headers})
          .pipe(
            tap(response => {
              localStorage.setItem(AUTH_TOKEN, response);
              const decodedToken = jwt_decode(response);
              localStorage.setItem(USER_ID, decodedToken[USER_ID]);
              localStorage.setItem(USER_ROLE, decodedToken[USER_ROLE]);
              localStorage.setItem(USER_NAME, decodedToken[USER_NAME]);
              this.currentUser = new CurrentUserModel();
              this.currentUser.userId = decodedToken[USER_ID];
              this.currentUser.username = decodedToken[USER_NAME];
              this.getCurrentUser().subscribe();
              this.router.navigate([decodedToken[USER_ROLE]]);
            }),
            catchError(error => {
              return throwError(error);
            })
          );
      }

      getCurrentUser(): Observable<CurrentUserModel> {
          return of(this.currentUser);
      }

      logout(){
        localStorage.removeItem(USER_ID);
        localStorage.removeItem(USER_ROLE);
        localStorage.removeItem(USER_NAME);
        this.currentUser = null;
        this.router.navigate(["/"]);
      }



}