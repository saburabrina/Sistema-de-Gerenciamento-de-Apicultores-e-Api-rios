import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducoes1603471461857 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'producoes',
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
                    name: 'rotulo',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'destino',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'tipo',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'material',
                    type: 'varchar',
                    length: '45',
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
        await queryRunner.dropTable('producoes');
    }

}
