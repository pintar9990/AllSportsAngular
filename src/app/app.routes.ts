import { Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {LoginFormularyComponent} from "./pages/login-formulary/login-formulary.component";
import {RegisterFormularyComponent} from "./pages/register-formulary/register-formulary.component";
import {PremierLeagueComponent} from "./pages/premier-league/premier-league.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {EditProfileComponent} from "./pages/edit-profile/edit-profile.component";

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'premier', component: PremierLeagueComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginFormularyComponent },
  { path: 'register', component: RegisterFormularyComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'edit', component: EditProfileComponent},
];
