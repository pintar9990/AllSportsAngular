import { Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {LoginFormularyComponent} from "./pages/login-formulary/login-formulary.component";
import {RegisterFormularyComponent} from "./pages/register-formulary/register-formulary.component";

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginFormularyComponent },
  { path: 'register', component: RegisterFormularyComponent },

];
