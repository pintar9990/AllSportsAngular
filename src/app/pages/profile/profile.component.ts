import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router: Router) {}

  // Método para navegar al componente de edición
  navigateToEditComponent() {
    this.router.navigate(['/edit']);
  }

  navigateToClub() {
    this.router.navigate(['/club']);
  }

  navigateToLeagues() {
    this.router.navigate(['/league']);
  }
}

