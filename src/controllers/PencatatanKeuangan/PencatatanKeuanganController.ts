import { Request, Response } from 'express';
import { checkUserById } from '../../models/AuthModels';
import {
  createPencatatanKeuangan,
  deletePencatatanKeuangan,
  getPencatatanKeuangan,
  getPencatatanKeuanganById,
  updatePencatatanKeuangan,
} from '../../models/PencatatanKeuangan/PencatatanKeuanganModel';
import ICPencatatanKeuangan from './ICPencatatanKeuangan';

class PencatatanKeuanganController implements ICPencatatanKeuangan {
  index = async (req: Request, res: Response): Promise<Response> => {
    const { id_user } = req.params;

    try {
      const checkUser = (await checkUserById(id_user)) as any[];

      if (checkUser.length == 0) {
        return res.status(404).json({
          message: 'User dosent exist',
        });
      }

      const data = await getPencatatanKeuangan(id_user);

      return res.status(200).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const { id_user, id_pencatatan_keuangan } = req.params;

    try {
      const checkUser = (await checkUserById(id_user)) as any[];

      if (checkUser.length == 0) {
        return res.status(404).json({
          message: 'User dosent exist',
        });
      }

      const rows = await getPencatatanKeuanganById(
        id_user,
        id_pencatatan_keuangan
      );

      return res.status(200).json({
        message: 'success',
        data: rows,
      });
    } catch (err) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const { id_user } = req.params;

    const { id, jumlah, kategori, notes, metode_pembayaran, jenis } = req.body;

    try {
      if (!id || !jumlah || !kategori || !notes || !jenis) {
        return res.status(400).json({
          message: 'All field is required',
        });
      }

      const checkUser = (await checkUserById(id_user)) as any[];

      if (checkUser.length == 0) {
        return res.status(404).json({
          message: 'User dosent exist',
        });
      }

      const data = await createPencatatanKeuangan(
        id,
        jumlah,
        kategori,
        notes,
        metode_pembayaran,
        jenis
      );

      console.log('data', data);

      return res.status(200).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id_user, id_pencatatan_keuangan } = req.params;

    try {
      const checkUser = (await checkUserById(id_user)) as any[];

      if (checkUser.length === 0) {
        return res.status(404).json({
          message: 'User dosent exist',
        });
      }

      const row = await deletePencatatanKeuangan(
        id_user,
        id_pencatatan_keuangan
      );

      return res.status(200).json({
        message: 'success',
        data: row,
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id_user, id_pencatatan_keuangan } = req.params;

    const { jumlah, kategori, notes, metode_pembayaran, jenis } = req.body;

    try {
      if (
        !id_user ||
        !id_pencatatan_keuangan ||
        !jumlah ||
        !kategori ||
        !notes ||
        !jenis
      ) {
        return res.status(400).json({
          message: 'All field is required',
        });
      }

      const checkUser = (await checkUserById(id_user)) as any[];

      if (checkUser.length === 0) {
        return res.status(404).json({
          message: 'User dosent exist',
        });
      }

      const data = await updatePencatatanKeuangan(
        jumlah,
        kategori,
        notes,
        metode_pembayaran,
        jenis,
        Number(id_pencatatan_keuangan),
        Number(id_user)
      );

      return res.status(200).json({
        message: 'success',
        data: data,
      });
    } catch (error) {
      console.log('error', error);
      return res.status(500).json({
        message: error,
      });
    }
  };
}

export default new PencatatanKeuanganController();
