import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5434,
    username: "postgres",
    password: "Wco@3027",
    database: "BancoUsuarios",
    entities: ['src/Database/entities/*.ts'],
    migrations: ['src/Database/migrations/*.ts'],
})

dataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})