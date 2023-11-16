import dbPool from '../../config/database';

const getPencatatanKeuangan = async (id_user: string) => {
  const SQLQuery =
    'SELECT id_pencatatan_keuangan, id, jumlah, kategori, notes, metode_pembayaran, jenis, created_at, updated FROM pencatatan_keuangan WHERE id = ?';

  const values = [id_user];

  const [rows] = await dbPool.promise().query(SQLQuery, values);

  return rows;
};

const getPencatatanKeuanganById = async (
  id_user: string,
  id_pencatatan_keuangan: string
) => {
  const SQLQuery =
    'SELECT id_pencatatan_keuangan, id, jumlah, kategori, notes, metode_pembayaran, jenis, created_at, updated FROM pencatatan_keuangan WHERE id = ? AND id_pencatatan_keuangan = ?';
  const values = [id_user, id_pencatatan_keuangan];

  const [rows] = await dbPool.promise().query(SQLQuery, values);

  return rows;
};

const createPencatatanKeuangan = async (
  id: number,
  jumlah: number,
  kategori: number,
  notes: string,
  metode_pembayaran: number,
  jenis: number
) => {
  const SQLQuery =
    'INSERT INTO pencatatan_keuangan (id, jumlah, kategori, notes, metode_pembayaran, jenis) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [id, jumlah, kategori, notes, metode_pembayaran, jenis];

  const [rows] = await dbPool.promise().query(SQLQuery, values);

  return rows;
};

const deletePencatatanKeuangan = async (
  id_user: string,
  id_pencatatan_keuangan: string
) => {
  const SQLQuery =
    'DELETE FROM pencatatan_keuangan WHERE id = ? AND id_pencatatan_keuangan = ?';
  const values = [id_user, id_pencatatan_keuangan];

  const [rows] = await dbPool.promise().query(SQLQuery, values);

  return rows;
};

const updatePencatatanKeuangan = async (
  jumlah: number,
  kategori: number,
  notes: string,
  metode_pembayaran: number,
  jenis: number,
  id_pencatatan_keuangan: number,
  id_user: number
) => {
  const SQLQuery = `UPDATE pencatatan_keuangan SET jumlah = ?, kategori = ?, notes = ?, metode_pembayaran = ?, jenis = ? WHERE id_pencatatan_keuangan = ? AND id = ?`;
  const values = [
    jumlah,
    kategori,
    notes,
    metode_pembayaran,
    jenis,
    id_pencatatan_keuangan,
    id_user,
  ];

  const [rows] = await dbPool.promise().query(SQLQuery, values);

  return rows;
};

export {
  getPencatatanKeuangan,
  getPencatatanKeuanganById,
  createPencatatanKeuangan,
  deletePencatatanKeuangan,
  updatePencatatanKeuangan,
};
