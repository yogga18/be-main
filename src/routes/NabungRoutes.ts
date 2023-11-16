import NabungControllers from '../controllers/NabungControllers';
import { auth } from '../middlewares/AuthMiddleware';
import { rateLimitMiddleware } from '../middlewares/RateLimitMiddleware';
import BaseRoutes from './BaseRoutes';

class NabungRoutes extends BaseRoutes {
  public routers(): void {
    this.router.get('/', rateLimitMiddleware, auth, NabungControllers.index);
    // this.router.post('/', NabungControllers.create);
    // this.router.get('/:id', NabungControllers.show);
    // this.router.put('/:id', NabungControllers.update);
    // this.router.delete('/:id', NabungControllers.delete);
  }
}

export default new NabungRoutes().router;
