"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
// initial config
console.log('[SERVER] start config');
dotenv_1.default.config();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
console.log('[SERVER] end config');
exports.default = app;
