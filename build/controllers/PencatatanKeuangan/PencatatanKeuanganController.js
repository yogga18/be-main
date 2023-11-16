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
const AuthModels_1 = require("../../models/AuthModels");
const PencatatanKeuanganModel_1 = require("../../models/PencatatanKeuangan/PencatatanKeuanganModel");
class PencatatanKeuanganController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id_user } = req.params;
            try {
                const checkUser = (yield (0, AuthModels_1.checkUserById)(id_user));
                if (checkUser.length == 0) {
                    return res.status(404).json({
                        message: 'User dosent exist',
                    });
                }
                const data = yield (0, PencatatanKeuanganModel_1.getPencatatanKeuangan)(id_user);
                return res.status(200).json({
                    message: 'success',
                    data: data,
                });
            }
            catch (error) {
                return res.status(500).json({
                    message: error,
                });
            }
        });
        this.show = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id_user, id_pencatatan_keuangan } = req.params;
            try {
                const checkUser = (yield (0, AuthModels_1.checkUserById)(id_user));
                if (checkUser.length == 0) {
                    return res.status(404).json({
                        message: 'User dosent exist',
                    });
                }
                const rows = yield (0, PencatatanKeuanganModel_1.getPencatatanKeuanganById)(id_user, id_pencatatan_keuangan);
                return res.status(200).json({
                    message: 'success',
                    data: rows,
                });
            }
            catch (err) {
                return res.status(500).json({
                    message: 'Internal server error',
                });
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id_user } = req.params;
            const { id, jumlah, kategori, notes, metode_pembayaran, jenis } = req.body;
            try {
                if (!id || !jumlah || !kategori || !notes || !jenis) {
                    return res.status(400).json({
                        message: 'All field is required',
                    });
                }
                const checkUser = (yield (0, AuthModels_1.checkUserById)(id_user));
                if (checkUser.length == 0) {
                    return res.status(404).json({
                        message: 'User dosent exist',
                    });
                }
                const data = yield (0, PencatatanKeuanganModel_1.createPencatatanKeuangan)(id, jumlah, kategori, notes, metode_pembayaran, jenis);
                console.log('data', data);
                return res.status(200).json({
                    message: 'success',
                    data: data,
                });
            }
            catch (error) {
                return res.status(500).json({
                    message: error,
                });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id_user, id_pencatatan_keuangan } = req.params;
            try {
                const checkUser = (yield (0, AuthModels_1.checkUserById)(id_user));
                if (checkUser.length === 0) {
                    return res.status(404).json({
                        message: 'User dosent exist',
                    });
                }
                const row = yield (0, PencatatanKeuanganModel_1.deletePencatatanKeuangan)(id_user, id_pencatatan_keuangan);
                return res.status(200).json({
                    message: 'success',
                    data: row,
                });
            }
            catch (error) {
                return res.status(500).json({
                    message: error,
                });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id_user, id_pencatatan_keuangan } = req.params;
            const { jumlah, kategori, notes, metode_pembayaran, jenis } = req.body;
            try {
                if (!id_user ||
                    !id_pencatatan_keuangan ||
                    !jumlah ||
                    !kategori ||
                    !notes ||
                    !jenis) {
                    return res.status(400).json({
                        message: 'All field is required',
                    });
                }
                const checkUser = (yield (0, AuthModels_1.checkUserById)(id_user));
                if (checkUser.length === 0) {
                    return res.status(404).json({
                        message: 'User dosent exist',
                    });
                }
                const data = yield (0, PencatatanKeuanganModel_1.updatePencatatanKeuangan)(jumlah, kategori, notes, metode_pembayaran, jenis, Number(id_pencatatan_keuangan), Number(id_user));
                return res.status(200).json({
                    message: 'success',
                    data: data,
                });
            }
            catch (error) {
                console.log('error', error);
                return res.status(500).json({
                    message: error,
                });
            }
        });
    }
}
exports.default = new PencatatanKeuanganController();
