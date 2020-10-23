import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateControlesVeterinarios1603471441227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'controles_veterinarios',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'apiario',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'data_exame',
                    type: 'date',
                    isNullable: false
                },
                {
                    name: 'condicao_veterinaria',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'veterinario',
                    type: 'integer',
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
        await queryRunner.dropTable('controles_veterinarios');
    }

}
