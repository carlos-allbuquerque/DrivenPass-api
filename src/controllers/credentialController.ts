import { credentialSchema } from './../schemas/passwordsSchemas';
import { Request, Response } from "express";
import { create, getCredential } from "../services/credentialService.js";
import { getCredentials } from "../services/credentialService.js";

export async function createCredentials(req: Request, res: Response) {
    const credential = req.body;

    await create(credential);
    return res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
    const { userId } = req.params;
    const numberId = parseInt(userId);
    const credentials = await getCredentials(numberId);

    return res.status(200).send(credentials);
}

export async function getCredentialsById(req: Request, res: Response) {
    const { credentialId } = req.params;
    const { userId } = req.body;
    const numberUserId = parseInt(userId);
    const numberCredentialId = parseInt(credentialId);
    const credential = await getCredential(numberCredentialId, numberUserId);
    
    return res.status(200).send(credential);

}