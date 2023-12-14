import BaseRoutes from './BaseRoutes';

// Middlewares
import TodosControllers from '../controllers/TodosControllers';

// Controllers

class TodosRoutes extends BaseRoutes {
  public routers(): void {
    this.router.get('/', TodosControllers.index);
    this.router.get('/:id', TodosControllers.show);
    // this.router.put('/:id', TodosControllers.update);
    // this.router.delete('/:id', TodosControllers.delete);
  }
}

export default new TodosRoutes().router;
