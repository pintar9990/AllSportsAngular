import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SessionStateService} from "../../services/session-state.service";
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isRegistered = false;

  constructor(private sessionStateService: SessionStateService, private router: Router) {
    // Suscríbete al estado de registro
    this.sessionStateService.registrationState$.subscribe((state) => {
      this.isRegistered = state === 1;
    });
  }
  register() {
    this.router.navigate(['/register']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  premier() {
    this.router.navigate(['/premier']);
  }
  nba() {
    this.router.navigate(['/nba']);
  }

  laliga() {
    this.router.navigate(['/laliga']);
  }

  landing () {
    this.router.navigate(['/landing']);
  }

  profile () {
    this.router.navigate(['/profile']);
  }
}

