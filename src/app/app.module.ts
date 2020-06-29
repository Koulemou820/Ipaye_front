import { ZoneAddComponent } from './zone-add/zone-add.component';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { DevisesComponent } from './devises/devises.component';
import { DeviseAddComponent } from './devise-add/devise-add.component';
import { DeviseShowComponent } from './devise-show/devise-show.component';
import { DeviseEditComponent } from './devise-edit/devise-edit.component';
import { ZonesComponent } from './zones/zones.component';
import { ZoneShowComponent } from './zone-show/zone-show.component';
import { ZoneEditComponent } from './zone-edit/zone-edit.component';
import { OperateursComponent } from './operateurs/operateurs.component';
import { OperateurAddComponent } from './operateur-add/operateur-add.component';
import { OperateurShowComponent } from './operateur-show/operateur-show.component';
import { OperateurEditComponent } from './operateur-edit/operateur-edit.component';
import { TauxEchangeComponent } from './taux-echange/taux-echange.component';
import { TauxEchangeAddComponent } from './taux-echange-add/taux-echange-add.component';

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
  {path:'devises', component: DevisesComponent},
  {path:'devises/add', component: DeviseAddComponent},
  {path:'devises/show/:code', component: DeviseShowComponent},
  {path:'devises/edit/:code', component: DeviseEditComponent},
  {path:'zones', component: ZonesComponent},
  {path:'zones/add',component: ZoneAddComponent},
  {path:'zones/show/:key',component: ZoneShowComponent},
  {path:'zones/edit/:key',component:ZoneEditComponent},
  {path:'operateurs',component:OperateursComponent},
  {path:'operateurs/add',component:OperateurAddComponent},
  {path:'operateurs/show/:operateur',component:OperateurShowComponent},
  {path:'operateurs/edit/:operateur',component:OperateurEditComponent},
  {path:'taux-echanges',component:TauxEchangeComponent},
  {path:'taux-echanges/add',component:TauxEchangeAddComponent},
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
    PasswordChangeComponent,
    DevisesComponent,
    DeviseAddComponent,
    DeviseShowComponent,
    DeviseEditComponent,
    ZonesComponent,
    ZoneAddComponent,
    ZoneShowComponent,
    ZoneEditComponent,
    OperateursComponent,
    OperateurAddComponent,
    OperateurShowComponent,
    OperateurEditComponent,
    TauxEchangeComponent,
    TauxEchangeAddComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
