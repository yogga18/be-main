import PencatatanKeuanganController from '../../controllers/PencatatanKeuangan/PencatatanKeuanganController';
import { auth } from '../../middlewares/AuthMiddleware';
import { rateLimitMiddleware } from '../../middlewares/RateLimitMiddleware';
import BaseRoutes from '../BaseRoutes';

class PencatatanKeuanganRoute extends BaseRoutes {
  public routers(): void {
    this.router.get(
      '/pencatatan/:id_user',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.index
    );
    this.router.get(
      '/pencatatan/:id_user/:id_pencatatan_keuangan',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.show
    );
    this.router.delete(
      '/pencatatan/:id_user/:id_pencatatan_keuangan',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.delete
    );
    this.router.post(
      '/pencatatan/:id_user',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.create
    );
    this.router.put(
      '/pencatatan/:id_user/:id_pencatatan_keuangan',
      rateLimitMiddleware,
      auth,
      PencatatanKeuanganController.update
    );
  }
}

export default new PencatatanKeuanganRoute().router;
