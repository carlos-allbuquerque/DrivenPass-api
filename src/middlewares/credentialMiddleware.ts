import { Request, Response, NextFunction } from 'express';
import { NewExpression } from 'typescript';
import { credentialSchema } from "../schemas/passwordsSchemas";


export function validateCredentialData(req: Request, res: Response, next: NextFunction) {
    const credentialData = req.body;
    const { error } = credentialSchema.validate(credentialData, {abortEarly: false});
   
    if (error) { 
        throw { code: "unprocessable", message: error.details }
    };
    next();
}