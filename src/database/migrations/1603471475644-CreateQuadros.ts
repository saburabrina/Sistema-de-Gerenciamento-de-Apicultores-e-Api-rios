import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuadros1603471475644 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'quadros',
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
                    name: 'caixa',
                    type: 'integer',
                    unsigned: true,
                    isNullable: false
                },
                {
                    name: 'tipo',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'fundo',
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
        await queryRunner.dropTable('quadros');
    }

}
