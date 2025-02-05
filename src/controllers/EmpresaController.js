const { Empresa } = require('../models');
const { validationResult } = require('express-validator');

exports.buscarEmpresaPorNit = async (req, res) => {
    try {
        // Validar errores de express-validator
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { nit } = req.params;

        // Buscar la empresa
        const empresa = await Empresa.findOne({ where: { nit } });

        if (!empresa) {
            return res.status(404).json({
                message: 'No se encontró una empresa con ese NIT'
            });
        }

        return res.json(empresa);
    } catch (error) {
        console.error('Error al buscar empresa:', error);
        return res.status(500).json({
            message: 'Error interno del servidor'
        });
    }
}; 