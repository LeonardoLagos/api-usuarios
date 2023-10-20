
import { Cidades } from "../Database/entities/Cidades";
import { dataSource as db } from "../Database/dataSources/dataSource"



const dbCidade = db.getRepository(Cidades)

export class CidadesService {

    async getAllCidades() {

        const cidades = await dbCidade.find()

        return cidades

    }

    
}



