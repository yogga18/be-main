import { Request, Response } from 'express';
import { getAllNabung } from '../models/NabungModels';
import { getUsersById } from '../models/TodosModels';
import IController from './ControllerInterface';

class NabungControllers implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const [rows] = await getAllNabung();

      console.log('rows', rows);

      return res.status(200).json({
        message: 'GET all data',
        data: rows,
      });
    } catch (error) {
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

export default new NabungControllers();
