import dbPool from '../config/database';

const getAllUsers = async () => {
  const SQLQuery = 'SELECT id, username, password FROM users';

  return dbPool.promise().query(SQLQuery);
};

const getUsersById = async (id: string) => {
  const SQLQuery = 'SELECT id, username, password FROM users WHERE id = ?';
  const values = [id];

  return dbPool.promise().query(SQLQuery, values);
};

export { getAllUsers, getUsersById };
