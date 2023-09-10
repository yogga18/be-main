import mysql from 'mysql2';

const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'main_db',
  // waitForConnections: true,
  // connectionLimit: 10,
  // maxIdelTime: 10,
  // idleTimeout: 600000,
  // queueLimit: 0,
});

export default dbPool;
