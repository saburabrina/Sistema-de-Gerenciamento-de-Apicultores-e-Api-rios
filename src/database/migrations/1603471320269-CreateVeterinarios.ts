import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVeterinarios1603471320269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'veterinarios',
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
                    name: 'nome',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'crmv',
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
        await queryRunner.dropTable('veterinarios');
    }

}
