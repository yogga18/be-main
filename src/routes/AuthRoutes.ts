import AuthController from '../controllers/AuthController';
import BaseRoutes from './BaseRoutes';

class AuthRoutes extends BaseRoutes {
  public routers(): void {
    this.router.post('/login', AuthController.login);
    this.router.post('/register', AuthController.register);
    this.router.post('/logout', AuthController.logout);
  }
}

export default new AuthRoutes().router;
