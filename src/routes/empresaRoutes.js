const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const empresaController = require('../controllers/EmpresaController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:nit',
    authMiddleware,
    [
        check('nit').notEmpty().withMessage('El NIT es requerido')
    ],
    empresaController.buscarEmpresaPorNit
);

module.exports = router; 