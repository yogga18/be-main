"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PencatatanKeuanganController_1 = __importDefault(require("../../controllers/PencatatanKeuangan/PencatatanKeuanganController"));
const AuthMiddleware_1 = require("../../middlewares/AuthMiddleware");
const RateLimitMiddleware_1 = require("../../middlewares/RateLimitMiddleware");
const BaseRoutes_1 = __importDefault(require("../BaseRoutes"));
class PencatatanKeuanganRoute extends BaseRoutes_1.default {
    routers() {
        /**
         * @swagger
         * /api/v1/keuangan/pencatatan/{id_user}:
         *   get:
         *     summary: Endpoint untuk get all data pencatatan keuangan by id user
         *     description: Mengambil semua data pencatatan keuangan berdasarkan user yang login.
         *     tags:
         *       - Pencatatan Keuangan
         *     parameters:
         *      - name: id_user
         *     responses:
         *       200:
         *         description: Login berhasil
         *       429:
         *         description: Terlalu banyak percobaan login
         */
        this.router.get('/pencatatan/:id_user', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.index);
        /**
         * @swagger
         * /api/v1/keuangan/pencatatan/{id_user}/{id_pencatatan_keuangan}:
         *   get:
         *     summary: Endpoint untuk get data pencatatan keuangan by id pencatatan_keuangan && by id user
         *     description: Melakukan proses login.
         *     tags:
         *       - Pencatatan Keuangan
         *     parameters:
         *      - name: id_user
         *      - name: id_pencatatan_keuangan
         *     responses:
         *       200:
         *         description: Login berhasil
         *       429:
         *         description: Terlalu banyak percobaan login
         */
        this.router.get('/pencatatan/:id_user/:id_pencatatan_keuangan', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.show);
        /**
         * @swagger
         * /api/v1/keuangan/pencatatan/{id_user}/{id_pencatatan_keuangan}:
         *   delete:
         *     summary: Endpoint untuk delete data pencatatan keuangan by id pencatatan_keuangan && by id user
         *     description: Melakukan proses login.
         *     tags:
         *       - Pencatatan Keuangan
         *     parameters:
         *      - name: id_user
         *      - name: id_pencatatan_keuangan
         *     responses:
         *       200:
         *         description: Login berhasil
         *       429:
         *         description: Terlalu banyak percobaan login
         */
        this.router.delete('/pencatatan/:id_user/:id_pencatatan_keuangan', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.delete);
        /**
         * @swagger
         * /api/v1/keuangan/pencatatan/{id_user}/{id_pencatatan_keuangan}:
         *   post:
         *     summary: Endpoint untuk post data pencatatan keuangan by id user
         *     description: Melakukan proses login.
         *     tags:
         *       - Pencatatan Keuangan
         *     parameters:
         *      - name: id_user
         *      - name: id_pencatatan_keuangan
         *     responses:
         *       200:
         *         description: Login berhasil
         *       429:
         *         description: Terlalu banyak percobaan login
         */
        this.router.post('/pencatatan/:id_user', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.create);
        /**
         * @swagger
         * /api/v1/keuangan/pencatatan/{id_user}/{id_pencatatan_keuangan}:
         *   post:
         *     summary: Endpoint untuk post data pencatatan keuangan by id user && id pencatatan keuangan
         *     description: Melakukan proses login.
         *     tags:
         *       - Pencatatan Keuangan
         *     parameters:
         *      - name: id_user
         *      - name: id_pencatatan_keuangan
         *     responses:
         *       200:
         *         description: Login berhasil
         *       429:
         *         description: Terlalu banyak percobaan login
         */
        this.router.put('/pencatatan/:id_user/:id_pencatatan_keuangan', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.update);
    }
}
exports.default = new PencatatanKeuanganRoute().router;
