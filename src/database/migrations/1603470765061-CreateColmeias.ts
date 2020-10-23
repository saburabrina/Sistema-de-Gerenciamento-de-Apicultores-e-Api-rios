import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateColmeias1603470765061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'colmeias',
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
                    name: 'especie_abelhas',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'origem',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'data_troca_rainha',
                    type: 'date'
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
        await queryRunner.dropTable('colmeias');
    }

}
