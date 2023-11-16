"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateDesc = [
    (0, express_validator_1.check)('description').isString(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                success: false,
                message: errors.array(),
            });
        }
        return next();
    },
];
exports.default = validateDesc;
