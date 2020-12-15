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
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class User {
    constructor(name, email, password, id = -1, persistent = false) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this._persistent = persistent;
        this._repository = UserRepository_1.default;
    }
    Validate() {
        return __awaiter(this, void 0, void 0, function* () {
            let errors = new Array();
            if (yield this._repository.DoesAnyUserHasThisEmail(this.email)) {
                errors.push("E-mail já cadastrado na plataforma");
            }
            return errors;
        });
    }
    Store() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._persistent)
                return;
            const saltRounds = 10;
            let salt = yield bcrypt_1.default.genSalt(saltRounds);
            this.password = yield bcrypt_1.default.hash(this.password, salt);
            yield this._repository.Add(this);
        });
    }
    Update() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._persistent)
                return;
        });
    }
    Delete() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._persistent)
                return;
        });
    }
    static Login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let errors = new Array();
            if (yield UserRepository_1.default.DoesAnyUserHasThisEmail(email)) {
                let user = yield UserRepository_1.default.GetByEmail(email);
                let rightPassword = yield bcrypt_1.default.compare(password, user.password);
                if (rightPassword) {
                    return user;
                }
                else {
                    errors.push("Senha errada");
                }
            }
            else {
                errors.push("Usuário não existe");
            }
            return errors;
        });
    }
}
exports.default = User;
