"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
class App {
    constructor() {
        this.instance = express_1.default();
        this.SetMiddlewares();
    }
    SetMiddlewares() {
        this.instance.use(express_session_1.default({
            secret: 'mamatex',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false }
        }));
        this.instance.use(express_1.default.json());
        this.instance.use(express_1.default.urlencoded({ extended: false }));
        this.instance.use(express_1.default.static(path_1.default.join(__dirname, '/public')));
        this.instance.set('views', path_1.default.join(__dirname, '/views'));
        this.instance.set('view engine', 'ejs');
        this.instance.set('trust proxy', 1);
        this.instance.use(routes_1.default);
    }
}
exports.default = new App();
