const database = require('../models');

class ColmeiaController {
    static async getColmeias(req, res) {
        try {
            const colmeias = await database.Colmeias.findAll();
            return res.status(200).json(colmeias);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getColmeiaById(req, res) {
        const { id } = req.params;

        try {
            const colmeia = await database.Colmeias.findOne({
                where: { id: Number(id) }
            });

            return res.status(200).json(colmeia);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createColmeia(req, res) {
        const colmeia = req.body;

        try {
            const colmeiaCriada = await database.Colmeias.create(colmeia);
            return res.status(200).json(colmeiaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateColmeia(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            await database.Colmeias.update(novasInfos, {
                where: { id: Number(id) }
            });

            const colmeiaUpdated = await database.Colmeias.findOne({
                where: { id: Number(id) }
            });

            return res.status(200).json(colmeiaUpdated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteColmeia(req, res) {
        const { id } = req.params;

        try {
            await database.Colmeias.destroy({
                where: { id: Number(id) }
            });
            
            return res.status(200).json({ 'message': `Colmeia ${id} deletada` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ColmeiaController;