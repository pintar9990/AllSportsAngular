import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {HeaderComponent} from "./components/header/header.component";
import {LoginFormularyComponent} from "./pages/login-formulary/login-formulary.component";
import {RegisterFormularyComponent} from "./pages/register-formulary/register-formulary.component";
import {PremierLeagueComponent} from "./pages/premier-league/premier-league.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LandingComponent,
    HeaderComponent,
    LoginFormularyComponent,
    RegisterFormularyComponent,
    PremierLeagueComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AllSportsAngular';
}
