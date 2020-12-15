"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class Database {
    constructor() {
        this.instance = knex_1.default({
            client: 'mysql2',
            connection: {
                host: '127.0.0.1',
                user: "root",
                password: "",
                database: "ufersatube"
            }
        });
    }
}
exports.default = new Database().instance;
