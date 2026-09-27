import { Component } from '@angular/core';

interface Metric {
  name: string;
  description: string;
}

@Component({
  selector: 'app-metrics-page',
  templateUrl: './metrics.page.html',
})
export class MetricsPage {
  readonly metrics: Metric[] = [
    { name: 'Tamaño del build', description: 'Mide los archivos que el navegador debe descargar.' },
    { name: 'TTFB', description: 'Mide el tiempo hasta que llega el primer byte del servidor.' },
    { name: 'Tiempo hasta interactivo', description: 'Mide cuándo la interfaz responde a la persona usuaria.' },
  ];
}
