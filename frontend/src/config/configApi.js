import axios from "axios";


export default axios.create({
    //baseURL:'http://localhost:8080'
    //baseURL:'http://157.230.14.156:8080'	
    baseURL:'https://web.esinais.software:8080', //URL de producao com HTTPS
}) //
