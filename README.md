# ELITEBODY

## Descripción

ELITEBODY es una aplicación web desarrollada para la gestión y promoción de un gimnasio. Esta aplicación permite a los usuarios consultar servicios, horarios, entrenadores, y realizar reservas de clases. Este proyecto fue llevado a cabo como parte de un proyecto académico en la academia Rolling Code por un grupo de programadores full stack.

## Deploy

[Aquí](https://elitebodycode.netlify.app/) puede ver el sitio deployado.

Credenciales para ingresar como usuario administrador:
- **email**: admin@elitebody.com
- **password**: adminPassword

## Características

- Consulta de servicios ofrecidos por el gimnasio.
- Información detallada sobre horarios y entrenadores.
- Reserva de clases y actividades.
- Sección de noticias y novedades del gimnasio.
- API para consultar servicios ofrecidos por el gimnasio.
- API para la reserva de clases y actividades.
- Gestión de usuarios, productos en venta y clases.

## Tecnologías Utilizadas

**Frontend**
- Vite: Como herramienta de construcción y desarrollo.
- React: Biblioteca para la construcción de la interfaz de usuario.
- Bootstrap: Framework de CSS para estilos rápidos y eficientes.

**Backend**
- Node.js: Entorno de ejecución para JavaScript.
- Express: Framework para la construcción de aplicaciones web y APIs.
- Mongoose: Librería para modelar datos en MongoDB.

## Instalación

Clona los repositorios y ejecuta npm install para instalar las dependencias:

**Frontend**
1. Clona el repositorio:
`$ git clone https://github.com/Nilost21/ProyectoFinalFront.git`
2. Navega al directorio del proyecto:
`$ cd ProyectoFinalFront`
3. Instala las dependencias necesarias:
`$ npm install`

**Backend**
1. Clona el repositorio:
`$ git clone https://github.com/Nilost21/ProyectoFinalBack.git`
2. Navega al directorio del proyecto:
`$ cd ProyectoFinalBack`
3. Instala las dependencias necesarias:
`$ npm install`
4. Configurá las variables de entorn en archivo .env:

    PORT
    MONGO
    JWT_SECRET
    ADMIN_USERNAME
    ADMIN_EMAIL
    ADMIN_PASSWORD
    ADMIN_LASTNAME
    ADMIN_PHONENUMBER

## Clean architecture (Backend)

El proyecto sigue el principio de Arquitectura Limpia, separando las responsabilidades en capas bien definidas: Controladores, Servicios, Repositorios y Modelos. Este enfoque mejora la mantenibilidad y escalabilidad del código.

#### Controladores

Los controladores gestionan las solicitudes HTTP entrantes y las respuestas. Son responsables de recibir las entradas del usuario, procesarlas (normalmente llamando a servicios), y devolver las respuestas adecuadas.

Las rutas están organizadas en la carpeta `routes` y siguen una arquitectura limpia dividiendo la lógica en controladores, servicios y repositorios.

#### Servicios

Los servicios encapsulan la lógica de negocio y coordinan las operaciones entre los controladores y los repositorios. Esta capa se asegura de que las reglas de negocio se apliquen correctamente.

#### Repositorios

Los repositorios gestionan las operaciones de acceso a datos. Son responsables de la comunicación con la base de datos a través de los modelos, encapsulando las consultas SQL o ORM.

#### Modelos

Los modelos representan la estructura de los datos y las relaciones en la base de datos. Utilizamos Sequelize para definir estos modelos y sus asociaciones.

#### Integración de las Capas

- **Controladores**: Reciben las solicitudes del cliente, las validan y llaman a los servicios necesarios.
- **Servicios**: Contienen la lógica de negocio y coordinan las acciones entre los controladores y los repositorios.
- **Repositorios**: Realizan las operaciones de acceso a datos, comunicándose con la base de datos a través de los modelos.
- **Modelos**: Definen la estructura de los datos y las relaciones entre las tablas de la base de datos.

Esta estructura permite una separación clara de responsabilidades, facilitando la prueba, el mantenimiento y la escalabilidad del proyecto. Al seguir la Arquitectura Limpia, nos aseguramos de que cada capa tenga una única responsabilidad, promoviendo un código más organizado y manejable.

## Autores

Este proyecto fue desarrollado por un grupo de programadores de la academia Rolling Code:

    ALDERETE Ariana
    BARRIOS Macarena
    MOLINA Nicolas
    AMAYA Ricardo

## Agradecimientos

Agradecemos a la academia Rolling Code por el apoyo y la formación brindada durante el desarrollo de este proyecto.
