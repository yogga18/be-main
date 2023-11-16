"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const dbPool = mysql2_1.default.createPool({
    host: '103.127.98.252',
    user: 'root',
    password: 'Baru2023',
    database: 'main_db',
    // waitForConnections: true,
    // connectionLimit: 10,
    // maxIdelTime: 10,
    // idleTimeout: 600000,
    // queueLimit: 0,
});
exports.default = dbPool;
