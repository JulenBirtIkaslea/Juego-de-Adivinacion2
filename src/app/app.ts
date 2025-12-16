import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  standalone: true,
  //importamos el RouterOutlet
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('JuegoAdivinanza');
}
