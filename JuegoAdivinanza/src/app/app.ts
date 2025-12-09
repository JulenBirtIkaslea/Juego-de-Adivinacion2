import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('JuegoAdivinanza');
}
