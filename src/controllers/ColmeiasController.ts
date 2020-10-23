import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Colmeia } from '../models/Colmeia';

export default {
    async create(request: Request, response: Response) {
        const {
            especie_abelhas,
            origem,
            data_troca_rainha
        } = request.body;

        try {
            const colmeiasRepository = getRepository(Colmeia);

            const data = {
                especie_abelhas,
                origem,
                data_troca_rainha
            }

            const colmeia = colmeiasRepository.create(data);

            await colmeiasRepository.save(colmeia);

            return response.status(201).json(colmeia);
        } catch(error) {
            return response.status(500).json(error.message);
        }
    }
}