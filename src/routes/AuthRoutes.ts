import AuthController from '../controllers/AuthController';
import { rateLimitMiddleware } from '../middlewares/RateLimitMiddleware';
import BaseRoutes from './BaseRoutes';

class AuthRoutes extends BaseRoutes {
  public routers(): void {
    this.router.post('/login', rateLimitMiddleware, AuthController.login);
    this.router.post('/register', rateLimitMiddleware, AuthController.register);
    this.router.post('/logout', rateLimitMiddleware, AuthController.logout);
  }
}

export default new AuthRoutes().router;
