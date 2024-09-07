import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ejercicio-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-1.component.html',
  styleUrl: './ejercicio-1.component.scss'
})
export default class Ejercicio1Component {
  placeholder: string = 'Escribe algo';
  variable: string = '';
  
  constructor(private router: Router) {}

  navigateToEjercicio2() {
    this.router.navigate(['/ejercicio-2']);
  }

  cambiarValor(newValue: string) {
    this.variable = newValue;
  }
}
