import NabungControllers from '../controllers/NabungControllers';
import { auth } from '../middlewares/AuthMiddleware';
import BaseRoutes from './BaseRoutes';

class NabungRoutes extends BaseRoutes {
  public routers(): void {
    this.router.get('/', auth, NabungControllers.index);
    // this.router.post('/', NabungControllers.create);
    // this.router.get('/:id', NabungControllers.show);
    // this.router.put('/:id', NabungControllers.update);
    // this.router.delete('/:id', NabungControllers.delete);
  }
}

export default new NabungRoutes().router;
