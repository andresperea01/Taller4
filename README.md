# Taller 4 - Arquitecturas Frontend

Monorepo del punto 1 del Taller 4: comparación entre una SPA hecha con Angular y un sitio estático hecho con Astro.

## Aplicaciones

- `Client-Angular/`: SPA con renderizado del lado del cliente.
- `Astro-SSG/`: sitio generado estáticamente durante el build.

Ambas aplicaciones incluyen las mismas vistas: Usuarios, Productos, Fecha, Resumen, Métricas y Arquitectura.

## Ejecución local

```bash
cd Client-Angular && npm install && npm start
cd Astro-SSG && npm install && npm run dev
```

## Verificación

```bash
cd Client-Angular && npm test -- --runInBand && npm run build
cd Astro-SSG && npm run build
```

El análisis de tamaños y las conclusiones se documentarán en `ANALISIS_SPA_VS_SSG.md` tras generar los builds de producción. El entregable PDF se realizará posteriormente.
