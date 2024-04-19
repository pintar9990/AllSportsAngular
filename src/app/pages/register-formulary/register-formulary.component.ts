import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { Router } from '@angular/router';
import { SessionStateService} from "../../services/session-state.service";

@Component({
  selector: 'app-register-formulary',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Incluye CommonModule aquí
  templateUrl: './register-formulary.component.html',
  styleUrls: ['./register-formulary.component.css']
})
export class RegisterFormularyComponent {
  registerForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private router: Router, private sessionStateService: SessionStateService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-zÀ-ÿ\s]{1,40}')]],
      surname: ['', [Validators.required, Validators.pattern('[A-Za-zÀ-ÿ\s]{1,80}')]],
      username: ['', [Validators.required, Validators.pattern('[A-Za-z0-9_]{1,20}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,}')]],
      rePassword: ['', [Validators.required]]
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  register(): void {
    if (this.registerForm.valid) {
      console.log('Formulario de registro:', this.registerForm.value);
      this.router.navigate(['/landing']);
      this.sessionStateService.setRegistrationState(1); // Cambia el estado a registrado
    } else {
      console.error('El formulario contiene errores');
    }
  }
}
