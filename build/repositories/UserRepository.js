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
const Database_1 = __importDefault(require("../Database"));
const User_1 = __importDefault(require("../entities/User"));
class UserRepository {
    DoesAnyUserHasThisEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var data = yield Database_1.default.where({ email: email }).table("users");
            return data != undefined && data.length > 0;
        });
    }
    Add(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Database_1.default.insert({ email: entity.email, name: entity.name, password: entity.password }).table("users");
            }
            catch (err) {
                throw Error("Failed to store user");
            }
        });
    }
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    Update(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = (yield Database_1.default.where({ id: id }).table("users"));
                var user = new User_1.default(data.name, data.email, data.password, data.id, true);
                return user;
            }
            catch (err) {
                console.log(err);
                throw Error("No user found");
            }
        });
    }
    GetByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = (yield Database_1.default.where({ email: email }).table("users"))[0];
                var user = new User_1.default(data.name, data.email, data.password, data.id, true);
                return user;
            }
            catch (err) {
                console.log(err);
                throw Error("No user found");
            }
        });
    }
}
exports.default = new UserRepository();
