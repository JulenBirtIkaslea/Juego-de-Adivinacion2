import { Component } from '@angular/core';
import { FormsModule, NgForm  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Configuracion } from '../models/configuracion.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
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

  //Método que se ejecuta al pulsar "Recoger datos"
  recogerDatos() {
  // Crear el objeto Configuracion usando la class
  this.configuracion = new Configuracion(
  this.fullName,
  this.maxRange,
  this.maxAttempts
  );

  //Comprobación por consola (opcional)
  console.log('Configuración creada:', this.configuracion);
}
}
