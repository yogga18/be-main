"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
// Middlewares
const TodosControllers_1 = __importDefault(require("../controllers/TodosControllers"));
// Controllers
class TodosRoutes extends BaseRoutes_1.default {
    routers() {
        this.router.get('/', TodosControllers_1.default.index);
        // this.router.post('/', TodosControllers.create);
        this.router.get('/:id', TodosControllers_1.default.show);
        // this.router.put('/:id', TodosControllers.update);
        // this.router.delete('/:id', TodosControllers.delete);
    }
}
exports.default = new TodosRoutes().router;
