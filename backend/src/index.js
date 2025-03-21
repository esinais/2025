const express = require("express");
var cors = require('cors');
const path = require('path'); //permitire acesso a imagens

const https = require('https'); //importar https
const fs = require('fs'); //importar fs para ler arquivos

const routes = require('./routes.js');

require("dotenv").config();

require('./database');

const app = express();

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, "public", "upload")));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors());
    next();
});

app.use(routes);

//configuracao do certificado SSl
const options = {
	key: fs.readFileSync('/etc/letsencrypt/live/web.esinais.software/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/web.esinais.software/fullchain.pem')
};
// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//     // console.log("Servidor iniciado na porta 8080: http://localhost:8080");
//     console.log(`Backend running on ${PORT}`);
// });

//qualquer coisa voltar o 443 para 8080
//app.listen(8080, () => {
//    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
   
//});

//teste para ver se o https funciona
https.createServer(options, app).listen(8080, () => {
	console.log("Servidor HTTPS iniciado na porta 8080: https://web.sinais.software:8080");
});
