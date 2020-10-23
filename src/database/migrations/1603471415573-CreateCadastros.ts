import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCadastros1603471415573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'cadastros',
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
                    name: 'apiario',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'propriedade',
                    type: 'integer',
                    unsigned: true,
                    isNullable: false
                },
                {
                    name: 'municipio',
                    type: 'varchar',
                    length: '45'
                },
                {
                    name: 'comunidade',
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
        await queryRunner.dropTable('cadastros');
    }

}
