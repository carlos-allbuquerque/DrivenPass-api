import { Request, Response } from "express";
import { create } from "../services/credentialService.js";

export async function createCredentials(req: Request, res: Response) {
    const credential = req.body;

    await create(credential);
    res.sendStatus(201);
}