import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordChangeComponent } from './password-change/password-change.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {path:'profile', component: ProfileComponent},
  {path:'users', component: UserComponent},
  {path:'users/add', component: UserAddComponent},
  {path:'password/change', component: PasswordChangeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileComponent,
    UserComponent,
    UserAddComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
