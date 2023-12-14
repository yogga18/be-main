import PencatatanKeuanganController from '../../controllers/PencatatanKeuangan/PencatatanKeuanganController';
import { auth } from '../../middlewares/AuthMiddleware';
import { rateLimitMiddleware } from '../../middlewares/RateLimitMiddleware';
import BaseRoutes from '../BaseRoutes';

class PencatatanKeuanganRoute extends BaseRoutes {
  public routers(): void {
    /**
     * @swagger
     * /api/v1/keuangan/pencatatan/{id_user}:
     *   get:
     *     summary: Endpoint untuk get all data pencatatan keuangan by id user
     *     description: Mengambil semua data pencatatan keuangan berdasarkan user yang login.
     *     tags:
     *       - Pencatatan Keuangan
     *     parameters:
     *      - name: id_user
     *     responses:
     *       200:
     *         description: Login berhasil
     *       429:
     *         description: Terlalu banyak percobaan login
     */
    this.router.get(
      '/pencatatan/:id_user',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.index
    );

    /**
     * @swagger
     * /api/v1/keuangan/pencatatan/{id_user}/{id_pencatatan_keuangan}:
     *   get:
     *     summary: Endpoint untuk get data pencatatan keuangan by id pencatatan_keuangan && by id user
     *     description: Melakukan proses login.
     *     tags:
     *       - Pencatatan Keuangan
     *     parameters:
     *      - name: id_user
     *      - name: id_pencatatan_keuangan
     *     responses:
     *       200:
     *         description: Login berhasil
     *       429:
     *         description: Terlalu banyak percobaan login
     */
    this.router.get(
      '/pencatatan/:id_user/:id_pencatatan_keuangan',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.show
    );

    /**
     * @swagger
     * /api/v1/keuangan/pencatatan/{id_user}/{id_pencatatan_keuangan}:
     *   delete:
     *     summary: Endpoint untuk delete data pencatatan keuangan by id pencatatan_keuangan && by id user
     *     description: Melakukan proses login.
     *     tags:
     *       - Pencatatan Keuangan
     *     parameters:
     *      - name: id_user
     *      - name: id_pencatatan_keuangan
     *     responses:
     *       200:
     *         description: Login berhasil
     *       429:
     *         description: Terlalu banyak percobaan login
     */
    this.router.delete(
      '/pencatatan/:id_user/:id_pencatatan_keuangan',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.delete
    );

    /**
     * @swagger
     * /api/v1/keuangan/pencatatan/{id_user}/{id_pencatatan_keuangan}:
     *   post:
     *     summary: Endpoint untuk post data pencatatan keuangan by id user
     *     description: Melakukan proses login.
     *     tags:
     *       - Pencatatan Keuangan
     *     parameters:
     *      - name: id_user
     *      - name: id_pencatatan_keuangan
     *     responses:
     *       200:
     *         description: Login berhasil
     *       429:
     *         description: Terlalu banyak percobaan login
     */
    this.router.post(
      '/pencatatan/:id_user',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.create
    );

    /**
     * @swagger
     * /api/v1/keuangan/pencatatan/{id_user}/{id_pencatatan_keuangan}:
     *   post:
     *     summary: Endpoint untuk post data pencatatan keuangan by id user && id pencatatan keuangan
     *     description: Melakukan proses login.
     *     tags:
     *       - Pencatatan Keuangan
     *     parameters:
     *      - name: id_user
     *      - name: id_pencatatan_keuangan
     *     responses:
     *       200:
     *         description: Login berhasil
     *       429:
     *         description: Terlalu banyak percobaan login
     */
    this.router.put(
      '/pencatatan/:id_user/:id_pencatatan_keuangan',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.update
    );
  }
}

export default new PencatatanKeuanganRoute().router;
