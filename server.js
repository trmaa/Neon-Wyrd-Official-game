import express from 'express';
import path from 'path';
import open from 'open';
import fs from 'fs';

const app = express();
const port = 2000;

const directorioRaiz = path.resolve();

app.use(express.static(directorioRaiz));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(directorioRaiz, 'index.html'));
});

app.post("/save", (req, res) => {
    let info = JSON.stringify(req.body.data, null, 2);
    let src = req.body.src;
    fs.writeFile(src, info, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            res.status(500).send('Error al guardar la información: ' + err.message);
            return;
        }
        console.log('Archivo JSON modificado exitosamente.');
        res.send('Información guardada correctamente');
    });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
  open(`http://localhost:${port}`, "", "width=1280,height=720");
});