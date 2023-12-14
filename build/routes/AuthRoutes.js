"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const RateLimitMiddleware_1 = require("../middlewares/RateLimitMiddleware");
const BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
class AuthRoutes extends BaseRoutes_1.default {
    routers() {
        /**
         * @swagger
         * /login:
         *   post:
         *     summary: Endpoint untuk login
         *     description: Melakukan proses login.
         *     tags:
         *       - Auth
         *     parameters:
         *       - name: body
         *         in: body
         *         description: Data login pengguna
         *         required: true
         *         schema:
         *           type: object
         *           properties:
         *             username:
         *               type: string
         *             password:
         *               type: string
         *     responses:
         *       200:
         *         description: Login berhasil
         *       429:
         *         description: Terlalu banyak percobaan login
         */
        this.router.post('/login', RateLimitMiddleware_1.rateLimitMiddleware, AuthController_1.default.login);
        /**
         * @swagger
         * /register:
         *   post:
         *     summary: Endpoint untuk registrasi
         *     description: Melakukan proses registrasi pengguna baru.
         *     tags:
         *       - Auth
         *     parameters:
         *       - name: body
         *         in: body
         *         description: Data registrasi pengguna
         *         required: true
         *         schema:
         *           type: object
         *           properties:
         *             username:
         *               type: string
         *             password:
         *               type: string
         *     responses:
         *       201:
         *         description: Registrasi berhasil
         *       429:
         *         description: Terlalu banyak percobaan registrasi
         */
        this.router.post('/register', RateLimitMiddleware_1.rateLimitMiddleware, AuthController_1.default.register);
        /**
         * @swagger
         * /logout:
         *   post:
         *     summary: Endpoint untuk logout
         *     description: Melakukan proses logout.
         *     tags:
         *       - Auth
         *     parameters:
         *       - name: body
         *         in: body
         *         description: Data logout pengguna
         *         required: true
         *         schema:
         *           type: object
         *           properties:
         *             token:
         *               type: string
         *     responses:
         *       200:
         *         description: Logout berhasil
         *       401:
         *         description: Token tidak valid
         */
        this.router.post('/logout', RateLimitMiddleware_1.rateLimitMiddleware, AuthController_1.default.logout);
    }
}
exports.default = new AuthRoutes().router;
