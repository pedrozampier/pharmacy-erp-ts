"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = testConnection;
// /src/config/database.ts
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
// Função para testar a conexão
function testConnection() {
    connection.connect((err) => {
        if (err) {
            console.error('Erro ao conectar no banco de dados:', err);
            process.exit(1);
        }
        else {
            console.log('Conectado ao banco de dados com sucesso!');
        }
    });
}
exports.default = connection;
