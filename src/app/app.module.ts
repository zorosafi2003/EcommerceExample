import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { UserComponent } from './user/user/user.component';
import { AppRoutingModule } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule ,FormsModule ,AppRoutingModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers:[AuthService,UserService ,AuthGuard
  ,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
