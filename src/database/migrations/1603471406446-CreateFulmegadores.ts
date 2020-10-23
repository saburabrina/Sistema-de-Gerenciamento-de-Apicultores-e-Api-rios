import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFulmegadores1603471406446 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'fulmegadores',
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
                    name: 'apicultor',
                    type: 'varchar',
                    length: '11',
                    isNullable: false
                },
                {
                    name: 'produto_utilizado',
                    type: 'varchar',
                    length: '45'
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
        await queryRunner.dropTable('fulmegadores');
    }

}
