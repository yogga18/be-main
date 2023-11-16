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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePencatatanKeuangan = exports.deletePencatatanKeuangan = exports.createPencatatanKeuangan = exports.getPencatatanKeuanganById = exports.getPencatatanKeuangan = void 0;
const database_1 = __importDefault(require("../../config/database"));
const getPencatatanKeuangan = (id_user) => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = 'SELECT id_pencatatan_keuangan, id, jumlah, kategori, notes, metode_pembayaran, jenis, created_at, updated FROM pencatatan_keuangan WHERE id = ?';
    const values = [id_user];
    const [rows] = yield database_1.default.promise().query(SQLQuery, values);
    return rows;
});
exports.getPencatatanKeuangan = getPencatatanKeuangan;
const getPencatatanKeuanganById = (id_user, id_pencatatan_keuangan) => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = 'SELECT id_pencatatan_keuangan, id, jumlah, kategori, notes, metode_pembayaran, jenis, created_at, updated FROM pencatatan_keuangan WHERE id = ? AND id_pencatatan_keuangan = ?';
    const values = [id_user, id_pencatatan_keuangan];
    const [rows] = yield database_1.default.promise().query(SQLQuery, values);
    return rows;
});
exports.getPencatatanKeuanganById = getPencatatanKeuanganById;
const createPencatatanKeuangan = (id, jumlah, kategori, notes, metode_pembayaran, jenis) => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = 'INSERT INTO pencatatan_keuangan (id, jumlah, kategori, notes, metode_pembayaran, jenis) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [id, jumlah, kategori, notes, metode_pembayaran, jenis];
    const [rows] = yield database_1.default.promise().query(SQLQuery, values);
    return rows;
});
exports.createPencatatanKeuangan = createPencatatanKeuangan;
const deletePencatatanKeuangan = (id_user, id_pencatatan_keuangan) => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = 'DELETE FROM pencatatan_keuangan WHERE id = ? AND id_pencatatan_keuangan = ?';
    const values = [id_user, id_pencatatan_keuangan];
    const [rows] = yield database_1.default.promise().query(SQLQuery, values);
    return rows;
});
exports.deletePencatatanKeuangan = deletePencatatanKeuangan;
const updatePencatatanKeuangan = (jumlah, kategori, notes, metode_pembayaran, jenis, id_pencatatan_keuangan, id_user) => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = `UPDATE pencatatan_keuangan SET jumlah = ?, kategori = ?, notes = ?, metode_pembayaran = ?, jenis = ? WHERE id_pencatatan_keuangan = ? AND id = ?`;
    const values = [
        jumlah,
        kategori,
        notes,
        metode_pembayaran,
        jenis,
        id_pencatatan_keuangan,
        id_user,
    ];
    const [rows] = yield database_1.default.promise().query(SQLQuery, values);
    return rows;
});
exports.updatePencatatanKeuangan = updatePencatatanKeuangan;
