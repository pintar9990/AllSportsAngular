import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionStateService {
  private registrationState = new BehaviorSubject<number>(0); // 0 = no registrado, 1 = registrado

  // Observable para exponer el estado de registro
  public registrationState$ = this.registrationState.asObservable();

  // Método para cambiar el estado de registro
  public setRegistrationState(state: number): void {
    this.registrationState.next(state);
  }
}
