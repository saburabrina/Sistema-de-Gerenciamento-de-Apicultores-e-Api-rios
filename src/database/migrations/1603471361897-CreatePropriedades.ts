import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePropriedades1603471361897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'propriedades',
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
                    name: 'endereco',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'area_destinada',
                    type: 'decimal',
                    precision: 10,
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
        await queryRunner.dropTable('propriedades');
    }

}
