import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Usuarios1686762903879 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name: "id",
                        type: "serial4",
                        isPrimary: true
                    },{
                        name: "nome",
                        type: "varchar",
                        isNullable: false
                    }
                    ,{
                        name: "login",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "senha",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "cod_cidade",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "nivel_acesso",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "status",
                        type: "int",
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_users_cidade",
                        columnNames: ["cod_cidade"],
                        referencedTableName: "cidades",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_users_niveis_acesso",
                        columnNames: ["nivel_acesso"],
                        referencedTableName: "niveis_acesso",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )

        queryRunner.query(
            `insert into usuarios(login, senha, cod_cidade, nivel_acesso, status) values ('adm@teste.com', 'a', 1,1,1)`,
        )

        queryRunner.query(
            `insert into usuarios(login, senha, cod_cidade, nivel_acesso, status) values ('teste1@teste.com', 'a', 1,2,1)`,
        )

        queryRunner.query(
            `insert into usuarios(login, senha, cod_cidade, nivel_acesso, status) values ('teste2@teste.com', 'a', 1,2,1)`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }
}