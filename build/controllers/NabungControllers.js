"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const NabungModels_1 = require("../models/NabungModels");
const TodosModels_1 = require("../models/TodosModels");
class NabungControllers {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows] = yield (0, NabungModels_1.getAllNabung)();
                console.log('rows', rows);
                return res.status(200).json({
                    message: 'GET all data',
                    data: rows,
                });
            }
            catch (error) {
                return res.status(500).json({
                    message: 'Internal server error',
                });
            }
        });
        this.show = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const [rows] = yield (0, TodosModels_1.getUsersById)(id);
                return res.status(200).json({
                    message: 'GET all data',
                    data: rows,
                });
            }
            catch (err) {
                return res.status(500).json({
                    message: 'Internal server error',
                });
            }
        });
    }
}
exports.default = new NabungControllers();
