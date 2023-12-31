import { Request, Response } from "express";
import { UserService } from "../services/UserService";

require("dotenv-safe").config();

export class UserController {
    userService:UserService
    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }
    
    createUser = async (request: Request, response: Response): Promise<Response> => {
        const {login, senha, cod_cidade} = request.body;
        
        const result = await this.userService.createUser({login, senha, cod_cidade, nivel_acesso: 2})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(201).json({ message: "Usuario criado"});
    }

    deleteUser = async (request:Request, response:Response): Promise<Response> => {
        const { id } = request.params;
        const result = await this.userService.deleteUser(id)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(204).json({ message:"Usuario deleteado" });
    }

    getAllUsers = async (request: Request, response: Response): Promise<Response> => {
        const result = await this.userService.getAllUsers()

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result);
    }

    updateUser = async (request:Request, response:Response): Promise<Response> => {
        const { id } = request.params;
        const {login, senha, cod_cidade, nivel_acesso} = request.body;
        const result = await this.userService.updateUser({login, senha, cod_cidade, nivel_acesso})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200).json({ message:"Usuário atualizado" });
    }

    validateUser = async (request:Request, response:Response): Promise<Response> => {
        response.header("Access-Control-Allow-Origin", "*")
        response.header("Context-Type", "application/json")
        const {login, senha} = request.body;
        const result = await this.userService.validateUser({login, senha})

        if(result instanceof Error){
            return response.status(401).json(result.message)
        }

        return response.status(200).json(result)
    }
}