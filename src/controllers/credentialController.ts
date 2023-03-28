import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";

export async function createCredentials(req: Request, res: Response) {
  const credential = req.body;

  await credentialService.create(credential);
  return res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
  const { userId } = req.params;
  const numberId = parseInt(userId);
  const credentials = await credentialService.getCredentials(numberId);

  return res.status(200).send(credentials);
}

export async function getCredentialsById(req: Request, res: Response) {
  const { credentialId } = req.params;
  const { userId } = req.body;
  const numberUserId = parseInt(userId);
  const numberCredentialId = parseInt(credentialId);
  const credential = await credentialService.getCredential(
    numberCredentialId,
    numberUserId
  );

  return res.status(200).send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
  const credentialId = parseInt(req.params.id);
  if (isNaN(credentialId)) res.sendStatus(422);
  const { userId } = req.body;
  await credentialService.removeCredential(credentialId, userId);
  
  return res.sendStatus(200);
}
