# Registro de Pedidos

Esta aplicación web (CRUD) funciona con una base de datos conectada a MySQL. Guarda, edita y borra datos como el titular del pedido, el monto a pagar y la descripción.

# Requerimientos

1. Node v18.14.0
2. MySQL

## Instalación

```bash
  npm install
```

Necesitarás crear una base de datos con MySQL (Usando XAMPP o directamente MySQL):

```bash
  CREATE DATABASE pedidosbd;
  USE pedidosbd;
  CREATE TABLE pedidos(
    -> id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    -> title VARCHAR(200),
    -> monto VARCHAR(50),
    -> descripcion VARCHAR(255));
```

# Ejecución

1. Ejecutar desde la consola `npm run dev` en la carpeta raíz del proyecto para iniciar el servidor de desarrollo
2. Abrir el navegador en la dirección http://localhost:4000 para acceder a la aplicación

## Documentación

- [Node](https://nodejs.org/es/docs)
- [Express](https://expressjs.com/en/guide/routing.html)
- [HandlerBar](https://handlebarsjs.com/guide/)
