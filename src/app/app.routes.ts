import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";

export const routes: Routes = [
  { path: '', redirectTo: '/streaming', pathMatch: 'full' },
  { path: 'streaming', component: LandingComponent },
];
