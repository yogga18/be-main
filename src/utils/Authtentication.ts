import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Authtentication {
  public static Authtentication = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };

  public static passwordCompare = async (
    text: string,
    encryptedText: string
  ): Promise<boolean> => {
    let result = await bcrypt.compare(text, encryptedText);

    return result;
  };

  public static generateToken = (
    id: number,
    username: string,
    password: string,
    status: number
  ): string => {
    console.log('status', status);

    const secretKey: string = process.env.JWT_SECRET_KEY || 'secret';

    // expired in 24 hours
    const expiredIn: number = 60 * 60 * 24;

    const token = jwt.sign({ id, username, password, status }, secretKey, {
      expiresIn: expiredIn,
    });

    return token;
  };
}

export default Authtentication;
