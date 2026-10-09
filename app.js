
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const archivo = path.join(__dirname, "index.html");

    fs.readFile(archivo, (error, contenido) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Error al leer el archivo");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(contenido);
    });
});

server.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});