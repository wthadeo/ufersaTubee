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
const User_1 = __importDefault(require("../entities/User"));
class UserController {
    Store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var { email, password, name } = req.body;
            var user = new User_1.default(name, email, password);
            var validation = yield user.Validate();
            if (validation.length == 0) {
                try {
                    yield user.Store();
                    res.redirect("/");
                }
                catch (err) {
                    validation.push("Erro interno!");
                    res.redirect(`/singup?errors=${JSON.stringify(validation)}&form=${JSON.stringify({ email, name })}`);
                }
            }
            else {
                res.redirect(`/singup?errors=${JSON.stringify(validation)}&form=${JSON.stringify({ email, name })}`);
            }
        });
    }
    Auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { email, password } = req.body;
            let result = yield User_1.default.Login(email, password);
            if (result.name != undefined) {
                req.session.user = result;
                res.redirect("/");
            }
            else {
                req.session.user = null;
                res.redirect(`/login?errors=${JSON.stringify(result)}`);
            }
        });
    }
    Logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.session.user = null;
            res.redirect('/login');
        });
    }
}
exports.default = new UserController();
