import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) {
  }

  onSubmit() {
    this.authService.login(this.loginModel).subscribe();
  }

  ngOnInit() {
  }

}
