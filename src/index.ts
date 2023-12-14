import compression from 'compression';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { config as dotenv } from 'dotenv';
import TodosRoutes from './routes/TodosRoutes';
import AuthRoutes from './routes/AuthRoutes';
import NabungRoutes from './routes/NabungRoutes';
import PencatatanKeuanganRoute from './routes/PencatatanKeuangan/PencatatanKeuanganRoute';

// Routes

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }


  // Plugins
  protected plugins(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(morgan('dev')); // morgan for logging request
    this.app.use(compression()); // compress all request response
    this.app.use(helmet()); // secure your app by setting various HTTP headers
    this.app.use(cors());
    dotenv();
  }

  // Routes
  protected routes(): void {
    this.app.use('/api/v1/nabung', NabungRoutes);
    this.app.use('/api/v1/todos', TodosRoutes);
    this.app.use('/api/v1/auth', AuthRoutes);
    this.app.use('/api/v1/keuangan', PencatatanKeuanganRoute);
  }
}

const PORT = process.env.PORT || 8080;
const app = new App().app;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
