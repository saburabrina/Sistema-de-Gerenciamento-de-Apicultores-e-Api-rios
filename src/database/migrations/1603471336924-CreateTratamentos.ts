import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTratamentos1603471336924 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tratamentos',
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
                    name: 'colmeia',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'quantidade_doses',
                    type: 'integer',
                    unsigned: true,
                    isNullable: false
                },
                {
                    name: 'forma_dosagem',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'doenca',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'produto',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'data_tratamento',
                    type: 'date',
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
        await queryRunner.dropTable('tratamentos');
    }

}
