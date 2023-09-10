import dbPool from '../config/database';

const getAllNabung = async () => {
  const SQLQuery = 'SELECT id_nabung, id_user, amount, notes FROM tbl_nabung';

  return dbPool.promise().query(SQLQuery);
};

export { getAllNabung };
