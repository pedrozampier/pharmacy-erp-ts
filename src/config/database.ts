import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Função para testar a conexão
export function testConnection() {
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar no banco de dados:', err);
      process.exit(1);
    } else {
      console.log('Conectado ao banco de dados com sucesso!');
    }
  });
}

export default connection;
