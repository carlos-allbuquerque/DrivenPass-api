import { Request, Response } from "express";
import { create } from "../services/authServices.js";

export function signup(req: Request, res: Response) {
    try {
        const user = req.body;

        create(user);
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }

}