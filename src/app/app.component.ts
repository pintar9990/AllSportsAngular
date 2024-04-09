import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AllSportsAngular';
}
