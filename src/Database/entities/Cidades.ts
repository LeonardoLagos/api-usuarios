import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("cidades")
export class Cidades{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    descricao: string

    @Column()
    uf: string

    @Column("numeric")
    long: number

    @Column("numeric")
    lat: number
}