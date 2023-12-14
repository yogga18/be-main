import AuthController from '../controllers/AuthController';
import { rateLimitMiddleware } from '../middlewares/RateLimitMiddleware';
import BaseRoutes from './BaseRoutes';

class AuthRoutes extends BaseRoutes {
  public routers(): void {
    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Endpoint untuk login
     *     description: Melakukan proses login.
     *     tags:
     *       - Auth
     *     parameters:
     *       - name: body
     *         in: body
     *         description: Data login pengguna
     *         required: true
     *         schema:
     *           type: object
     *           properties:
     *             username:
     *               type: string
     *             password:
     *               type: string
     *     responses:
     *       200:
     *         description: Login berhasil
     *       429:
     *         description: Terlalu banyak percobaan login
     */
    this.router.post('/login', rateLimitMiddleware, AuthController.login);

    /**
     * @swagger
     * /register:
     *   post:
     *     summary: Endpoint untuk registrasi
     *     description: Melakukan proses registrasi pengguna baru.
     *     tags:
     *       - Auth
     *     parameters:
     *       - name: body
     *         in: body
     *         description: Data registrasi pengguna
     *         required: true
     *         schema:
     *           type: object
     *           properties:
     *             username:
     *               type: string
     *             password:
     *               type: string
     *     responses:
     *       201:
     *         description: Registrasi berhasil
     *       429:
     *         description: Terlalu banyak percobaan registrasi
     */
    this.router.post('/register', rateLimitMiddleware, AuthController.register);

    /**
     * @swagger
     * /logout:
     *   post:
     *     summary: Endpoint untuk logout
     *     description: Melakukan proses logout.
     *     tags:
     *       - Auth
     *     parameters:
     *       - name: body
     *         in: body
     *         description: Data logout pengguna
     *         required: true
     *         schema:
     *           type: object
     *           properties:
     *             token:
     *               type: string
     *     responses:
     *       200:
     *         description: Logout berhasil
     *       401:
     *         description: Token tidak valid
     */
    this.router.post('/logout', rateLimitMiddleware, AuthController.logout);
  }
}

export default new AuthRoutes().router;
