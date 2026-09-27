import { Routes } from '@angular/router';
import { DatePage } from './pages/date/date.page';
import { ArchitecturePage } from './pages/architecture/architecture.page';
import { MetricsPage } from './pages/metrics/metrics.page';
import { ProductsPage } from './pages/products/products.page';
import { SummaryPage } from './pages/summary/summary.page';
import { UsersPage } from './pages/users/users.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de la fecha.
   *
   * @remarks
   * Renderiza el componente `DatePage`, encargado
   * de mostrar la fecha actual del sistema.
   */
  { path: 'date', component: DatePage },

  /** Vista de resumen de las capacidades de la aplicación. */
  { path: 'summary', component: SummaryPage },

  /** Vista con métricas que ayudan a comparar los builds. */
  { path: 'metrics', component: MetricsPage },

  /** Vista que explica el flujo de una SPA. */
  { path: 'architecture', component: ArchitecturePage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];
