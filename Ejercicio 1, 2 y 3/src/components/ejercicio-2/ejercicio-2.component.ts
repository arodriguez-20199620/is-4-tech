import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ejercicio-2',
  standalone: true,
  templateUrl: './ejercicio-2.component.html',
  styleUrls: ['./ejercicio-2.component.scss']
})
export default class Ejercicio2Component implements OnInit, OnDestroy {
  @Input() param: string = '';

  constructor(private router: Router) { }


  updatedValue: string = '';
  initialValue: string = 'valor ';

  ngOnInit(): void {
    this.initialValue = this.param;

    setTimeout(() => {
      this.updatedValue = 'Valor actualizado';
    }, 30000);
  }

  ngOnDestroy() {
    console.log('Componente destruido');
  }

  navigateToEjercicio1() {
    this.router.navigate(['/ejercicio-1']);
  }
}