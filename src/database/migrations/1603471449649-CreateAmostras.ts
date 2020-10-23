import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAmostras1603471449649 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'amostras',
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
                    name: 'controle_veterinario',
                    type: 'integer',
                    unsigned: true,
                    isNullable: false
                },
                {
                    name: 'tipo_abelha',
                    type: 'varchar',
                    length: '45'
                },
                {
                    name: 'material_biologico',
                    type: 'varchar',
                    length: '45'
                },
                {
                    name: 'mel',
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
        await queryRunner.dropTable('amostras');
    }

}
