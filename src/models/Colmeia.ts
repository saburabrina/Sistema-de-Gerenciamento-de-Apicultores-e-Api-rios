import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Timestamp } from "typeorm";

@Entity('colmeias')
export class Colmeia {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    especie_abelhas: string;

    @Column()
    origem: string;

    @Column()
    data_troca_rainha: Date;

    @CreateDateColumn()
    created_at: Timestamp;

    @UpdateDateColumn()
    updated_at: Timestamp;
}
