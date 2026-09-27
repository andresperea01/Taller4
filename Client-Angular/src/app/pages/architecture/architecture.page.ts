import { Component } from '@angular/core';

@Component({
  selector: 'app-architecture-page',
  templateUrl: './architecture.page.html',
})
export class ArchitecturePage {
  readonly steps = [
    'El navegador descarga index.html y el bundle de JavaScript.',
    'Angular inicia la aplicación y el Router selecciona la vista.',
    'Los componentes generan y actualizan el DOM en el cliente.',
  ];
}
