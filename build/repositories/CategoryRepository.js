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
class CategoryRepository {
    Add(entity) {
        throw new Error("Method not implemented.");
    }
    GetById(id) {
        throw new Error("Method not implemented.");
    }
    GetBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield Database_1.default.where({ slug: slug }).table("categories");
            if (result.length == 0) {
                return null;
            }
            else {
                let category = result[0];
                category.videos = yield Database_1.default.where({ category: category.id }).table("videos");
                return category;
            }
        });
    }
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield Database_1.default.select().table("categories"));
        });
    }
    Update(id, entity) {
        throw new Error("Method not implemented.");
    }
    Delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new CategoryRepository();
