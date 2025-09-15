# ZipCount — Prototipo Front-End (UDIT)

ZipCount es un prototipo visual (solo Front-End) de una tienda de videojuegos creado como proyecto académico para la Universidad UDIT. El objetivo es practicar maquetación web, diseño responsive y pequeñas interacciones de UI sin backend.

## ¿De qué va la web?

La web simula una tienda online de videojuegos:
- Página de inicio con juegos destacados.
- Catálogo de productos en la tienda.
- Lista de deseos (Wishlist).
- Sección “Sobre nosotros”.

Todas las páginas son estáticas y se enfocan en la capa visual: estructura HTML, estilos CSS y pequeñas interacciones con JavaScript vanilla.

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 (layouts en columnas; estilos por página)
- JavaScript (vanilla) para interacciones básicas
- Recursos estáticos (imágenes) en `rsc/`

No se usan frameworks ni librerías externas. No hay servidor ni base de datos: es una maqueta puramente Front-End.

## Estructura del proyecto

- `mainpage/index.html` — Página principal (Inicio)
- `shop/shop.html` — Tienda / Catálogo de productos
- `wish/wish.html` — Lista de deseos
- `aboutus/about.html` — Sobre nosotros
- `rsc/` — Recursos gráficos (imágenes y logotipos)
- `temp/updated.*` — Variante/prototipo de página para pruebas

En cada sección (`mainpage/`, `shop/`, `wish/`, `aboutus/`) se incluyen:
- `styles.css` — Estilos base de la página
- `columns.css` — Estilos de layout en columnas
- `script.js` — JS específico de la página

## Funcionalidades clave (nivel prototipo)

- Navegación entre secciones.
- Diseño visual de tarjetas/listados de juegos (imágenes, texto, destacados).
- Estructura para añadir interacciones con JavaScript.
- Recursos gráficos de videojuegos en `rsc/` (por ejemplo: `elden-ring.jpg`, `forza.jpg`, `minecraft.png`, etc.).

## Cómo ejecutar en local

Opción rápida (solo visualizar):
1. Clona o descarga el repositorio.
2. Abre `mainpage/index.html` directamente en tu navegador.

Opción recomendada (servidor local):
- Usa una extensión como “Live Server” en VS Code para recarga automática y evitar restricciones de rutas.

## Capturas y medios

- Logo: `rsc/LOGO.png`
- Icono: `rsc/ICON.png`
- Imágenes de juegos en `rsc/` para maquetación de la tienda y destacados.

## Créditos

- Proyecto académico de la Universidad UDIT.
- Autoría: Rodrigo Garcia Sanchez.
- Solo con fines educativos.

## Licencia

Este repositorio no declara una licencia explícita. El uso de los recursos gráficos (imágenes) es estrictamente educativo y no comercial.
