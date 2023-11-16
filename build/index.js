"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const TodosRoutes_1 = __importDefault(require("./routes/TodosRoutes"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const NabungRoutes_1 = __importDefault(require("./routes/NabungRoutes"));
const PencatatanKeuanganRoute_1 = __importDefault(require("./routes/PencatatanKeuangan/PencatatanKeuanganRoute"));
// Routes
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    // Plugins
    plugins() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('dev')); // morgan for logging request
        this.app.use((0, compression_1.default)()); // compress all request response
        this.app.use((0, helmet_1.default)()); // secure your app by setting various HTTP headers
        this.app.use((0, cors_1.default)());
        (0, dotenv_1.config)();
    }
    // Routes
    routes() {
        this.app.use('/api/v1/nabung', NabungRoutes_1.default);
        this.app.use('/api/v1/todos', TodosRoutes_1.default);
        this.app.use('/api/v1/auth', AuthRoutes_1.default);
        this.app.use('/api/v1/keuangan', PencatatanKeuanganRoute_1.default);
    }
}
const PORT = process.env.PORT || 8080;
const app = new App().app;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
