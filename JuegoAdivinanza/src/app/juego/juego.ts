import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuracion } from '../models/configuracion.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './juego.html',
})
export class Juego {

  //Esta propiedad puede recibir datos desde el componente padre
  @Input() configuracion!: Configuracion;

  // Número que introduce el usuario
  guess: number | null = null;

  //Mensaje de resultado 
  mensaje = '';

  intentosRestantes!: number;

  //Canlculo de intentos restantes al iniciar el componente
  ngOnInit() {
    this.intentosRestantes = this.configuracion.maxAttempts!;
  }


  //Al pulsar enviar, comprueba si es correcto
  enviar() {
    if (this.guess === null) return;

    const generado = this.configuracion.randomNumber!;
    const introducido = this.guess;

    //resta un intento por cada envío
    this.intentosRestantes--;

    if (introducido === generado) {
    this.mensaje = 'Has Ganado';
    return; 
  }

  if (this.intentosRestantes === 0) {
    this.mensaje = 'Has perdido'; 
    return;
  }

    if (introducido > generado) {
      this.mensaje = 'Te pasaste';
    } else if (introducido === generado - 1) {
      this.mensaje = 'Caliente';
    } else if (introducido === generado - 2) {
      this.mensaje = 'Templado';
    } else if (introducido <= generado - 3) {
      this.mensaje = 'Frío';
    } else if (introducido === generado) {
      this.mensaje = 'Has Ganado';
    }
  }

  //Recarga la página para volver a jugar
  volverAJugar() {
    window.location.reload();
  }
}