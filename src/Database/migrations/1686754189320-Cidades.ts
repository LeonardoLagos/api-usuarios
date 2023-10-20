import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Cidades1686754189320 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name: "cidades",
            columns: [
                {
                    name: "id",
                    type: "serial4",
                    isPrimary: true
                },
                {
                    name: "descricao",
                    type: "varchar"
                },
                {
                    name: "uf",
                    type: "varchar"
                },
                {
                    name: "long",
                    type: "numeric"
                },
                {
                    name: "lat",
                    type: "numeric"
                }
            ]
        }))

        await queryRunner.query(
            `insert into cidades(descricao, UF, long, lat) values ('Cerejeiras', 'MT', -60.81972478857078, -13.19070072182293)`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cidades")

    }

}
