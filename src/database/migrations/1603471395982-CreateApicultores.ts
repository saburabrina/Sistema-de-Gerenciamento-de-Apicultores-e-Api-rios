import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateApicultores1603471395982 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'apicultores',
            columns: [
                {
                    name: 'cpf',
                    type: 'varchar',
                    length: '11',
                    isPrimary: true,
                    isGenerated: false,
                    isNullable: false
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'certificacao',
                    type: 'varchar',
                    length: '45',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '45'
                },
                {
                    name: 'telefone',
                    type: 'varchar',
                    length: '13',
                    isNullable: false
                },
                {
                    name: 'producao_anual',
                    type: 'decimal',
                    precision: 5,
                    scale: 2
                },
                {
                    name: 'perfil',
                    type: 'varchar',
                    length: '10'
                },
                {
                    name: 'vinculo',
                    type: 'varchar',
                    length: '9'
                },
                {
                    name: 'endereco',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'trabalha_em',
                    type: 'integer',
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
        await queryRunner.dropTable('apicultores');
    }

}
