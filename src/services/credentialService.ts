import * as credentialRepository from "../repositories/credentialRepository.js";
import { createCredentialData } from "../types/credentialType.js";
import {
  encryptAddedPassword,
  decryptAddedPassword,
} from "../utils/passwordUtils.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";
import { User } from "@prisma/client";

export async function create(credential: createCredentialData, user: User) {
  const titleInUse = await credentialRepository.getCredentialByTitle(
    user.id,
    credential.title
  );
  if (titleInUse) throw conflictError("Title already in use");

  const credencialPassword = credential.password;
  const credentialInfos = {
    ...credential,
    password: encryptAddedPassword(credencialPassword)
  };

  await credentialRepository.createCredential(credentialInfos, user.id);
}

export async function getCredentials(userId: number) {
  const credentials = await credentialRepository.getUserCredentials(userId);
  if (!credentials) {
    throw notFoundError("The user doesn't have any credentials");
  }
  return credentials.map((credential) => {
    const { password } = credential;
    return { ...credential, password: decryptAddedPassword(password) };
  });
}

export async function getCredential(credentialId: number, userId: number) {
  const credential = await credentialRepository.getEspecificUserCredential(
    credentialId,
    userId
  );
  if (!credential) {
    throw notFoundError("Credential not found");
  }

  const decrypted = decryptAddedPassword(credential.password);
  return { ...credential, password: decrypted };
}

export async function removeCredential(id: number, userId: number) {
  await getCredential(id, userId);
  await credentialRepository.removeCredential(id);
}
