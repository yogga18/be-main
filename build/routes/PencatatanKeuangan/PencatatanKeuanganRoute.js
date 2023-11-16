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
        this.router.get('/pencatatan/:id_user', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.index);
        this.router.get('/pencatatan/:id_user/:id_pencatatan_keuangan', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.show);
        this.router.delete('/pencatatan/:id_user/:id_pencatatan_keuangan', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.delete);
        this.router.post('/pencatatan/:id_user', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.create);
        this.router.put('/pencatatan/:id_user/:id_pencatatan_keuangan', RateLimitMiddleware_1.rateLimitMiddleware, AuthMiddleware_1.auth, PencatatanKeuanganController_1.default.update);
    }
}
exports.default = new PencatatanKeuanganRoute().router;
