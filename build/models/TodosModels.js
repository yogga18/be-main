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
exports.getUsersById = exports.getAllUsers = void 0;
const database_1 = __importDefault(require("../config/database"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = 'SELECT id, username, password FROM users';
    return database_1.default.promise().query(SQLQuery);
});
exports.getAllUsers = getAllUsers;
const getUsersById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const SQLQuery = 'SELECT id, username, password FROM users WHERE id = ?';
    const values = [id];
    return database_1.default.promise().query(SQLQuery, values);
});
exports.getUsersById = getUsersById;
