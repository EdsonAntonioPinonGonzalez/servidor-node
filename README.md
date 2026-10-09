Servidor HTTP con Node.js

Descripción



Este proyecto implementa un servidor HTTP utilizando Node.js. La práctica incluye un programa básico de Hola Mundo, un servidor HTTP y la lectura y envío de un archivo HTML mediante operaciones síncronas y asíncronas.



Requisitos

Node.js

Navegador web

Archivos del proyecto

app.js: contiene el código del servidor HTTP.

index.html: página HTML que lee y envía el servidor.

README.md: documentación del proyecto.

Dockerfile: instrucciones para construir la imagen de Docker.

Ejecución

Abrir una terminal en la carpeta del proyecto.



Ejecutar el servidor con el comando:



node app.js



Abrir en el navegador:



http://localhost:3000



Lectura de archivos



El proyecto utiliza el módulo fs de Node.js para leer archivos:



Síncrona: mediante fs.readFileSync().

Asíncrona: mediante fs.readFile().



La versión asíncrona permite que Node.js continúe realizando otras tareas mientras espera la lectura del archivo.



Autor



Edson Antonio Piñón González
360037

