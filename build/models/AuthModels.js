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
exports.updateStatusUser = exports.loginUser = exports.checkUser = void 0;
const database_1 = __importDefault(require("../config/database"));
const checkUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = 'SELECT id, username, password, status FROM users WHERE username = ?';
    const values = [username];
    return database_1.default.promise().query(SQLQuery, values);
});
exports.checkUser = checkUser;
const loginUser = (username, password, status) => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = 'INSERT INTO users (username, password, status) VALUES (?, ?, ?)';
    const values = [username, password, status];
    return database_1.default.promise().query(SQLQuery, values);
});
exports.loginUser = loginUser;
const updateStatusUser = (username, status) => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = 'UPDATE users SET status = ? WHERE username = ?';
    const values = [status, username];
    return database_1.default.promise().query(SQLQuery, values);
});
exports.updateStatusUser = updateStatusUser;
