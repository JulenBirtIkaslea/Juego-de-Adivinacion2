import { Component } from '@angular/core';
import { FormsModule, NgForm  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Configuracion } from '../models/configuracion.model';
//componente Juego importado para usarlo dentro del formulario
import { Juego } from '../juego/juego';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule, Juego],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  // Datos del formulario
  fullName = '';

  // Campo 2: rango máximo del número aleatorio
  maxRange: number | null = null;

  // Campo 3
  maxAttempts: number | null = null;

  // Feedback 
  nameError = false;
  rangeError = false;
  attemptsError = false;

  //Objeto Configuracion que se creará al pulsar el botón
  configuracion: Configuracion | null = null;

  //Control de blur (si el usuario ha salido del input)
  nameTouched = false;
  rangeTouched = false;
  attemptsTouched = false;

  //Genera un número aleatorio entre 0 y (rango - 1)
  generarNumeroAleatorio(rango: number): number {
    return Math.floor(Math.random() * rango);
  }

  //Botón "Recoger datos"
  recogerDatos() {
    
    //Validación: nombre y apellido no pueden estar vacíos
    if (this.fullName.trim() === '') {
      this.nameError = true;   // activacion de feedback
      return;                 // salimos del método
    } else {
      this.nameError = false;  // quitar error cuando esta bien
    }

    let random: number | null = null;

    //Validación del rango mínimo (mínimo 4)
    if (this.maxRange !== null && this.maxRange >= 4) {
      random = this.generarNumeroAleatorio(this.maxRange);
       this.rangeError = false;
    } else {
      //Marcar error de rango en el feedback
      this.rangeError = true;
      return;
    }

    //Crear el objeto Configuracion
    this.configuracion = new Configuracion(
      this.fullName,
      this.maxRange,
      this.maxAttempts,
      //random no lleva this. porque es una variable local
      random
    );

    console.log('Configuración creada:', this.configuracion);
  }

  //Validaciones en tiempo real
  isNameOk(): boolean {
    //trim para eliminar espacios en blanco
    return this.fullName.trim() !== '';
  }

  //Rango mínimo 4
  isRangeOk(): boolean {
    return this.maxRange !== null && this.maxRange >= 4;
  }

  //intentos  mínimo 1
  isAttemptsOk(): boolean {
  return this.maxAttempts !== null && this.maxAttempts >= 1;
}

  //Botón activo solo si los 3 metodos anteriores están OK
  canRecogerDatos(): boolean {
    return this.isNameOk() && this.isRangeOk() && this.isAttemptsOk();
  }

}
