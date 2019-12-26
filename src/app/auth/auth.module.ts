import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';





@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [LoginComponent],
  providers: [AuthService]
  
})
export class AuthModule { }
