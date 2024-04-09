import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {HeaderComponent} from "./header/header.component";
import {LoginFormularyComponent} from "./login-formulary/login-formulary.component";
import {RegisterFormularyComponent} from "./register-formulary/register-formulary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LandingComponent,
    HeaderComponent,
    LoginFormularyComponent,
    RegisterFormularyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AllSportsAngular';
}
