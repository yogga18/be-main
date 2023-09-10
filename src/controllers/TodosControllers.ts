import { Request, Response } from 'express';
import IController from './ControllerInterface';
import { getAllUsers, getUsersById } from '../models/TodosModels';

class ToodosControllers implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const [rows] = await getAllUsers();

      return res.status(200).json({
        message: 'GET all data',
        data: rows,
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
      const [rows] = await getUsersById(id);

      return res.status(200).json({
        message: 'GET all data',
        data: rows,
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  };
}

export default new ToodosControllers();
