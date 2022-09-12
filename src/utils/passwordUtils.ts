import bcrypt from "bcrypt";
import dotenv from "dotenv";
import Cryptr from "cryptr";

dotenv.config();

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

export function encryptAccountPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function decryptAccountPassword(password: string, encryptedPassword: string) {
  return bcrypt.compareSync(password, encryptedPassword);
}

export function decryptAddedPass(encryptedSecurityCode: string) {
  return cryptr.decrypt(encryptedSecurityCode);
}

export function encryptAddedPassword(password: string) {
  return cryptr.encrypt(password);
}

