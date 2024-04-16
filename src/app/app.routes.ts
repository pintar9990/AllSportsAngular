import { Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {LoginFormularyComponent} from "./pages/login-formulary/login-formulary.component";
import {RegisterFormularyComponent} from "./pages/register-formulary/register-formulary.component";
import {ClubComponent} from "./pages/club/club.component";
import {EditProfileComponent} from "./pages/edit-profile/edit-profile.component";
import {ProfileComponent} from "./pages/profile/profile.component";

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginFormularyComponent },
  { path: 'register', component: RegisterFormularyComponent },
  { path: 'club', component: ClubComponent},
  { path: 'edit', component: EditProfileComponent},
  { path: 'profile', component: ProfileComponent},

];
