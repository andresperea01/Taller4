# Análisis SPA vs SSG

## Alcance

Se comparan los builds de producción de las dos aplicaciones de este monorepo con las mismas seis vistas navegables: Usuarios, Productos, Fecha, Resumen, Métricas y Arquitectura. Las mediciones se realizaron localmente el 27 de septiembre de 2026 después de ejecutar `npm run build` en cada proyecto.

## Tamaño de los builds

| Aplicación | Arquitectura | Tamaño total en disco | Resultado relevante |
| --- | --- | ---: | --- |
| `Client-Angular` | SPA con renderizado en cliente | 1,048 KiB | El bundle inicial informado por Angular es 689.59 kB sin comprimir y 136.88 kB de transferencia estimada. |
| `Astro-SSG` | SSG con HTML preconstruido | 652 KiB | Generó siete documentos HTML estáticos y no emitió un bundle de JavaScript de aplicación para estas vistas. |

Astro produjo un artefacto total aproximadamente 38% menor en disco para este ejercicio. El CSS de Bootstrap y las fuentes de iconos representan la mayor parte de ambos builds, por lo que esta diferencia no debe atribuirse solamente al framework.

Angular emitió una advertencia de presupuesto: el bundle inicial de 689.59 kB supera el límite configurado de 500 kB. La compilación terminó correctamente. Reducir Bootstrap o cargar recursos bajo demanda sería una mejora posible si el proyecto creciera.

## Tiempo de carga

No se registraron tiempos de red con una conexión o servidor de producción, así que no se presentan milisegundos como si fueran resultados medidos. A nivel de arquitectura, el comportamiento esperado es:

| Aspecto | Angular SPA | Astro SSG |
| --- | --- | --- |
| Primer contenido visible | El navegador descarga `index.html`, JavaScript y después Angular genera el DOM. | El navegador recibe HTML ya generado para cada ruta. |
| Interactividad | Requiere descargar y ejecutar JavaScript antes de que Angular controle la interfaz. | Estas vistas estáticas se muestran sin JavaScript de aplicación. |
| Navegación | El Router cambia el componente sin recargar el documento. | El navegador solicita el HTML de la siguiente ruta. |
| TTFB | Depende principalmente del hosting, caché y API. | Puede ser bajo al servir archivos estáticos desde CDN, aunque también depende del hosting. |

Por tanto, en páginas de contenido como las vistas de este taller, Astro tiene ventaja para mostrar contenido inicialmente. Esa afirmación describe el flujo de renderizado y no reemplaza una medición con Lighthouse en un entorno desplegado.

## Diferencias de arquitectura

Angular funciona como una SPA: arranca desde un documento HTML base, descarga un bundle y usa Router, componentes y change detection para renderizar la interfaz en el cliente. Este enfoque favorece aplicaciones con estado complejo, operaciones CRUD frecuentes, paneles internos y navegación muy interactiva.

Astro genera una página HTML por ruta durante el build. El navegador puede mostrar las vistas directamente y Astro puede añadir interactividad selectiva con islas cuando sea necesaria. Este enfoque favorece sitios de contenido, documentación, blogs, landing pages y páginas donde SEO y carga inicial son prioritarios.

## Conclusión técnica

Para las vistas principalmente informativas de este taller, la alternativa SSG con Astro es más eficiente: entrega HTML listo, produce un build total menor en esta medición y evita el coste de arrancar una aplicación JavaScript para renderizar contenido estático. Angular sigue siendo la elección adecuada si estas vistas evolucionan hacia un sistema con estado compartido complejo, actualizaciones en tiempo real o interacción intensa. La decisión debe partir del tipo de producto, no solo del tamaño del build.

## Comandos de reproducción

```bash
cd Client-Angular
npm ci
npm test -- --runInBand
npm run build

cd ../Astro-SSG
npm ci
npm run build
```
