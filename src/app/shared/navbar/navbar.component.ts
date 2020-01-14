import { Component, OnInit } from '@angular/core';
import { CurrentUserModel } from 'src/app/auth/models/current-user-model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private currentUser: CurrentUserModel = null;
  username: string;

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      console.log(user);
    });
    this.username = localStorage.getItem("Name")
  }

  logout(){
    this.authService.logout();
  }

}
