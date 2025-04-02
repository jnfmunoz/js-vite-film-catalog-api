<p align="center">
  <img src="screenshots/javascript-logo.png" alt="Javascript Logo" width="200">
</p>

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=yellow" alt="JavaScript">
  <img src="https://img.shields.io/badge/Vite.js-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite.js">
  <img src="https://img.shields.io/badge/Modular%20Pattern-3e8e41?style=flat&logo=javascript&logoColor=white" alt="Modular Pattern">
  <img src="https://img.shields.io/badge/JSON%20Server-323330?style=flat&logo=json&logoColor=white" alt="JSON Server">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/SweetAlert2-ff5a5f?style=flat&logo=javascript&logoColor=white" alt="SweetAlert2">

</div>

<div align=center>
  <h1>Film Catalog API</h1>
</div>
Film Catalog API es una aplicación CRUD creada con Vite.js, que consume una API REST a través de JSON Server. La API proporciona un listado de películas de tres directores icónicos de cine de terror: David Cronenberg, John Carpenter y Wes Craven.

## Tabla de Contenidos
- [Características](#características)
- [Instalación](#instalación)
- [API Endpoints](#api-endpoints)
- [Capturas de pantalla](#capturas-de-pantalla)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)
- [Licencia](#licencia)

## Características
- **CRUD completo:** Permite Crear, Leer, Actualizar y Eliminar películas.
- **API REST con JSON Server:** Los datos de las películas se almacenan en un archivo JSON simulado como backend.
- **Interfaz ligera con Vite.js:** Aplicación optimizada con un entorno de desarrollo rápido.
- **Mensajes de confirmación con SweetAlert2:** Se utilizan alertas visuales para confirmar acciones del usuario.
- **Validaciones en el formulario:** Se realizan validaciones básicas antes de agregar o actualizar películas.

## Instalación
1. Clona este repositorio:
  ``` bash
  git clone https://github.com/jnfmunoz/js-vite-film-catalog-api.git
  ```
2. Navega al directorio del repositorio:
  ``` bash
    cd film-catalog-api
  ```
3. Instala las dependencias:
  ``` bash
    npm install
  ```
4. Inicia JSON Server en un terminal:
  ``` bash
    npm run server
  ```
5. En un terminal paralelo, iniciamos nuestra aplicación:
  ``` bash
    npm run dev
  ```
## API Endpoints
- GET /movies - Obtiene todas las películas.
- POST /movies - Agrega una nueva película.
- PUT /movies/:id - Actualiza una película existente.
- DELETE /movies/:id - Elimina una película.

## Capturas de pantalla 
### Listado de películas
<p align="center">
  <img src="screenshots\movie-list.png">
</p>

### Detalle y actualización de una película
<p align="center">
  <img src="screenshots\movie-detail.png">
</p>

### Agregar una nueva película
<p align="center">
  <img src="screenshots\movie-add.png">
</p>

### Eliminar una película
<p align="center">
  <img src="screenshots\movie-delete.png">
</p>

## Tecnologías utilizadas
- **Javascript(ES6+)** - Lenguaje principal para la lógica del CRUD.
- **Vite.js** - Herramienta de bundling y servidor de desarrollo rápido.
- **Patrón módulo** - Se utilizó el patrón módulo para organizar el código en partes reutilizables y con un alcance bien definido, mejorando la modularidad y mantenibilidad del proyecto.
- **JSON Server** - Simulación de una API Rest con un archivo JSON.
- **CSS** - Estilos básicos sin diseño responsivo.
- **SweetAlert2** - Alertas visuales para confirmaciones de acciones.

## Autor
Desarrollado por Juan Muñoz Grau.

## Licencia
Este proyecto está bajo la licencia MIT. Esto significa que puedes usar, copiar, modificar y distribuir el código libremente, siempre y cuando incluyas la licencia en tu proyecto. No ofrece garantías y el autor no se hace responsable de su uso.
