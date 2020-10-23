import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMedicoesClimaticas1603471376050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'medicoes_climaticas',
            columns: [
                {
                    name: 'propriedade',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: false,
                    isNullable: false
                },
                {
                    name: 'mes',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: false,
                    isNullable: false
                },
                {
                    name: 'temperatura',
                    type: 'decimal',
                    precision: 3,
                    scale: 2,
                    isNullable: false
                },
                {
                    name: 'indice_pluviometrico',
                    type: 'decimal',
                    precision: 5,
                    scale: 2,
                    isNullable: false
                },
                {
                    name: 'umidade_ar',
                    type: 'decimal',
                    precision: 5,
                    scale: 2,
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('medicoes_climaticas');
    }

}
