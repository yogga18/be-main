import mysql from 'mysql2';

const dbPool = mysql.createPool({
  host: '103.127.98.252',
  user: 'root',
  password: 'Baru2023',
  database: 'db_main',
  // waitForConnections: true,
  // connectionLimit: 10,
  // maxIdelTime: 10,
  // idleTimeout: 600000,
  // queueLimit: 0,
});

export default dbPool;
