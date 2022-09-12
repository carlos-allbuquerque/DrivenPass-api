import { userData } from './../types/authTypes.js';
import { authSchema } from '../schemas/authSchema.js';
import { Request, Response, NextFunction } from 'express';

export function validateUserData(req: Request, res: Response, next: NextFunction) {
    const userData = req.body;
    const { error } = authSchema.validate(userData, {abortEarly: false});
   
    if (error) { 
        throw { code: "unprocessable", message: error.details }
    };
    next();
}