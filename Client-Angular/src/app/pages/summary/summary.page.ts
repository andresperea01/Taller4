import { Component } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary.page.html',
})
export class SummaryPage {
  readonly features = [
    'Navegación entre vistas mediante Angular Router.',
    'Renderizado de componentes en el navegador.',
    'Servicios preparados para consumir datos mediante HTTP.',
  ];
}
