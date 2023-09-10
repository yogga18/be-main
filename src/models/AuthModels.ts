import dbPool from '../config/database';

const checkUser = async (username: string) => {
  const SQLQuery =
    'SELECT id, username, password, status FROM users WHERE username = ?';
  const values = [username];

  return dbPool.promise().query(SQLQuery, values);
};

const loginUser = async (
  username: string,
  password: string,
  status: number
) => {
  const SQLQuery =
    'INSERT INTO users (username, password, status) VALUES (?, ?, ?)';
  const values = [username, password, status];

  return dbPool.promise().query(SQLQuery, values);
};

const updateStatusUser = async (username: string, status: number) => {
  const SQLQuery = 'UPDATE users SET status = ? WHERE username = ?';
  const values = [status, username];

  return dbPool.promise().query(SQLQuery, values);
};

export { checkUser, loginUser, updateStatusUser };
