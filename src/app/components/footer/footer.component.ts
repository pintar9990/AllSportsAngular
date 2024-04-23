import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  phone_number: string = "928645782";
  email: string = "AllSports@sp.com";
  address: string = "Calle Ruben Martinez, 45";

  constructor(private router: Router) {}

  register() {
    this.router.navigate(['/register']);
  }

  landing () {
    this.router.navigate(['/landing']);
  }
}
