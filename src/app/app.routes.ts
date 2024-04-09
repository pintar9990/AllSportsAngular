import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {LoginFormularyComponent} from "./login-formulary/login-formulary.component";
import {RegisterFormularyComponent} from "./register-formulary/register-formulary.component";

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginFormularyComponent },
  { path: 'register', component: RegisterFormularyComponent },

];
