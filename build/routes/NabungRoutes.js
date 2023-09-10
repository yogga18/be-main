"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NabungControllers_1 = __importDefault(require("../controllers/NabungControllers"));
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
const BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
class NabungRoutes extends BaseRoutes_1.default {
    routers() {
        this.router.get('/', AuthMiddleware_1.auth, NabungControllers_1.default.index);
        // this.router.post('/', NabungControllers.create);
        // this.router.get('/:id', NabungControllers.show);
        // this.router.put('/:id', NabungControllers.update);
        // this.router.delete('/:id', NabungControllers.delete);
    }
}
exports.default = new NabungRoutes().router;
