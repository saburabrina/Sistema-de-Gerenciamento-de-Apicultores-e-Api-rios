import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEnderecos1603471352150 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'enderecos',
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
                    name: 'logradouro',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'numero',
                    type: 'integer',
                    unsigned: true
                },
                {
                    name: 'complemento',
                    type: 'varchar',
                    length: '45'
                },
                {
                    name: 'comunidade',
                    type: 'varchar',
                    length: '45'
                },
                {
                    name: 'bairro',
                    type: 'varchar',
                    length: '45'
                },
                {
                    name: 'cidade',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'estado',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'cep',
                    type: 'varchar',
                    length: '8'
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
        await queryRunner.dropTable('enderecos');
    }

}
