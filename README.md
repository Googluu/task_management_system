# Task Management System

## Descripción:

Un sistema de gestión de tareas que permita a los usuarios crear, actualizar, eliminar y ver tareas. El sistema debe tener autenticación de usuarios y permitir que los usuarios solo accedan a sus propias tareas.

Funcionalidades:

1: Registro de usuarios: Los usuarios pueden registrarse proporcionando un nombre de usuario, dirección de correo electrónico y contraseña.

2: Autenticación de usuarios: Los usuarios deben poder iniciar sesión utilizando su dirección de correo electrónico y contraseña.

3: Creación de tareas: Los usuarios autenticados deben poder crear nuevas tareas proporcionando un título y una descripción.

4: Actualización de tareas: Los usuarios autenticados deben poder actualizar el título y la descripción de sus propias tareas.

5: Eliminación de tareas: Los usuarios autenticados deben poder eliminar sus propias tareas.

6: Listado de tareas: Los usuarios autenticados deben poder ver una lista de sus propias tareas, mostrando el título y la descripción de cada tarea.

7: Protección de rutas: Las rutas relacionadas con las tareas deben estar protegidas y solo ser accesibles para los usuarios autenticados.

Tecnologias usadas:

1: Node.js como entorno de ejecución.

2: Express.js como framework web para la creación de rutas y manejo de peticiones HTTP.

3: PostgreSQL como base de datos para el almacenamiento de los datos de usuarios y tareas.

4: JSON Web Tokens (JWT) como sistema de autenticación para manejar la autenticación de usuarios.

5: hashing y salting como las mejores prácticas de seguridad, como almacenar las contraseñas de los usuarios de forma segura.

6: Buenas prácticas de diseño de API RESTful para el manejo de rutas y respuestas HTTP.

7: Implementacion de validaciones de datos para garantizar la integridad de los campos requeridos.
