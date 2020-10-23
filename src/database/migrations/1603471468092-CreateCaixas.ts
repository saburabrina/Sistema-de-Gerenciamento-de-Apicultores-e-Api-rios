import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCaixas1603471468092 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'caixas',
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
                    name: 'colmeia',
                    type: 'integer',
                    unsigned: true,
                    isNullable: false
                },
                {
                    name: 'material',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'melgueiras',
                    type: 'integer',
                    unsigned: true,
                    default: 0
                },
                {
                    name: 'local_extracao',
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
        await queryRunner.dropTable('caixas');
    }

}
