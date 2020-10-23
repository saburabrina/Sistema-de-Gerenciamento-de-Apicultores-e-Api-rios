import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateApiarios1603471386583 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'apiarios',
            columns: [
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '45',
                    isPrimary: true,
                    isGenerated: false,
                    isNullable: false
                },
                {
                    name: 'dono',
                    type: 'varchar',
                    length: '11',
                    isPrimary: true,
                    isGenerated: false,
                    isNullable: false
                },
                {
                    name: 'propriedade',
                    type: 'integer',
                    unsigned: true,
                    isNullable: false
                },
                {
                    name: 'inscricao_estadual',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'data_fundacao',
                    type: 'date'
                },
                {
                    name: 'tipo_florada',
                    type: 'varchar',
                    length: '45'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    precision: 7,
                    scale: 7
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    precision: 7,
                    scale: 7
                },
                {
                    name: 'expandida',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'problema_sanitario',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'numero_caixas_povoadas',
                    type: 'integer',
                    unsigned: true,
                    default: 0
                },
                {
                    name: 'numero_caixas_vazias',
                    type: 'integer',
                    unsigned: true,
                    default: 0
                },
                {
                    name: 'tipo_instalacao',
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
        await queryRunner.dropTable('apiarios');
    }

}
