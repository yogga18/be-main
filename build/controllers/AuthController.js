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
const AuthModels_1 = require("../models/AuthModels");
const Authtentication_1 = __importDefault(require("../utils/Authtentication"));
class AuthController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            let { username, password } = req.body;
            const status = 0;
            const hashedPassowrd = yield Authtentication_1.default.Authtentication(password);
            const [rows] = yield (0, AuthModels_1.checkUser)(username);
            const usernameCheck = rows;
            // Check username is already exist
            if (((_a = usernameCheck[0]) === null || _a === void 0 ? void 0 : _a.username) === username) {
                return res.status(400).json({
                    message: 'Username already exists',
                });
            }
            yield (0, AuthModels_1.loginUser)(username, hashedPassowrd, status);
            return res.status(200).send({
                success: true,
                message: 'User created successfully',
                // data: data,
            });
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { username, password } = req.body; // 1. get username and password from request body
            const [rows] = yield (0, AuthModels_1.checkUser)(username);
            // 2. Check Password
            if (Array.isArray(rows) && rows.length > 0) {
                const user = rows[0]; // Mengasumsikan tipe RowDataPacket
                let userPwdCompare = yield Authtentication_1.default.passwordCompare(password, user.password);
                if (userPwdCompare) {
                    // update status user to 1
                    yield (0, AuthModels_1.updateStatusUser)(username, 1);
                    let token = Authtentication_1.default.generateToken(user.id, username, user.password, 1);
                    return res.status(200).send({
                        success: true,
                        message: 'Login success',
                        data: token,
                    });
                }
                else {
                    return res.status(400).send({
                        success: false,
                        message: 'Wrong password',
                        data: {},
                    });
                }
            }
            return res.status(400).send({
                success: false,
                message: 'Make sure your username is correct or maybe you are not registered',
            });
        });
        this.logout = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { username, password } = req.body;
            // Update status user to 0
            yield (0, AuthModels_1.updateStatusUser)(username, 0);
            // Destroy token
            req.app.locals.credential = null;
            return res.status(200).send({
                success: true,
                message: 'Logout success',
            });
        });
    }
}
exports.default = new AuthController();
