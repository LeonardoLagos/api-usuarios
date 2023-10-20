import { Request, Response } from "express";

import { CidadesService } from "../services/CidadesService";

export class CidadesController {

    async getAllCidades(request: Request, response: Response): Promise<Response> {

        try {

            const cidadesService = new CidadesService()
    
            const result = await cidadesService.getAllCidades()
    
            return response.status(200).json(result);
            
        } catch (error) {
            
            return response.status(400).json(error.message)

        }
        

    }
}