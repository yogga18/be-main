"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create Abstrac Class
const express_1 = require("express");
class BaseRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routers();
    }
}
exports.default = BaseRoutes;
