import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import { checkUser, loginUser, updateStatusUser } from '../models/AuthModels';
import Authtentication from '../utils/Authtentication';

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const status: number = 0;

    const hashedPassowrd: string = await Authtentication.Authtentication(
      password
    );

    const [rows] = await checkUser(username);

    const usernameCheck: RowDataPacket[] = <RowDataPacket[]>rows;

    // Check username is already exist
    if (usernameCheck[0]?.username === username) {
      return res.status(400).json({
        message: 'Username already exists',
      });
    }

    await loginUser(username, hashedPassowrd, status);

    return res.status(200).send({
      success: true,
      message: 'User created successfully',
      // data: data,
    });
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body; // 1. get username and password from request body

    const [rows] = await checkUser(username);

    // 2. Check Password
    if (Array.isArray(rows) && rows.length > 0) {
      const user = rows[0] as RowDataPacket; // Mengasumsikan tipe RowDataPacket

      let userPwdCompare = await Authtentication.passwordCompare(
        password,
        user.password
      );

      if (userPwdCompare) {
        // update status user to 1
        await updateStatusUser(username, 1);

        let token = Authtentication.generateToken(
          user.id,
          username,
          user.password,
          1
        );

        return res.status(200).send({
          success: true,
          message: 'Login success',
          data: token,
        });
      } else {
        return res.status(400).send({
          success: false,
          message: 'Wrong password',
          data: {},
        });
      }
    }

    return res.status(400).send({
      success: false,
      message:
        'Make sure your username is correct or maybe you are not registered',
    });
  };

  logout = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;

    // Update status user to 0
    await updateStatusUser(username, 0);

    // Destroy token
    req.app.locals.credential = null;

    return res.status(200).send({
      success: true,
      message: 'Logout success',
    });
  };
}

export default new AuthController();
