import express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./config/database/data-source"
import { routes } from "./routes";
import cors from "cors";


AppDataSource.initialize().then(async () => {


    const app = express()
    app.use(cors());
    app.use(bodyParser.json())
    
    app.use(routes);

    app.listen(3000)

    console.log("rodando na porta 3000")

}).catch(error => console.log(error))
