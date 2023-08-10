# Dist

Dist será el estándar de lado de front para los Proyectos de Drupal, no será necesario el uso de webpack, unicamente se necesitara tener instalado globalmente sass y compilar las hojas de estilos.

Para la regla de importaciones en los estilos se recomienda el uso de la regla [@use](https://sass-lang.com/documentation/at-rules/use) en vez de [@import](https://sass-lang.com/documentation/at-rules/import) como lo comenta la documentación.

## Requisitos

- Tener instalado globalmente sass.

## Scripts

Instala sass globalmente
```
npm i -g sass
```

Compila los archivos sass. Debe ubicarse en la carpeta raíz `dist/` y ejecutar el siguiente comando:
```
sass --watch scss/main.scss:css/main.css --style=compressed
```
