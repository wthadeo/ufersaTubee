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
const CategoryRepository_1 = __importDefault(require("../repositories/CategoryRepository"));
const VideoRepository_1 = __importDefault(require("../repositories/VideoRepository"));
class HomeController {
    Index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let categories = yield CategoryRepository_1.default.GetAll();
            let videos = yield VideoRepository_1.default.GetAll();
            let user = req.user;
            return res.render("index", { categories, videos, user });
        });
    }
    Singup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let errors = null;
            let email, name = null;
            try {
                errors = JSON.parse(req.query.errors);
            }
            catch (err) { }
            try {
                let form = JSON.parse(req.query.form);
                email = form.email;
                name = form.name;
            }
            catch (err) { }
            return res.render("singup", { errors, email, name });
        });
    }
    Singin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let errors = new Array();
            try {
                errors = JSON.parse(req.query.errors);
            }
            catch (err) { }
            res.render("login", { errors });
        });
    }
    Category(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let categories = yield CategoryRepository_1.default.GetAll();
            let user = req.user;
            let slug = req.params.slug;
            let category = yield CategoryRepository_1.default.GetBySlug(slug);
            if (category != null) {
                res.render("category", Object.assign(Object.assign({}, category), { categories, user }));
            }
            else {
                res.redirect("/");
            }
        });
    }
}
exports.default = new HomeController();
