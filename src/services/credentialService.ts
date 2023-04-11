import * as credentialRepository from "../repositories/credentialRepository.js";
import { CredentialData } from "../types/credentialType.js";
import { 
  encryptAddedPassword,
  decryptAddedPassword 
} from "../utils/passwordUtils.js";
import {
  conflictError,
  notFoundError
} from "../utils/errorUtils.js";

export async function create(credentialData: CredentialData) {
  const alreadyExistsInUser = await credentialRepository.searchCredential(
    credentialData.title,
    credentialData.userId
  );
  if (alreadyExistsInUser)
    throw conflictError("Title already in use");
  const encryptedPassword = encryptAddedPassword(credentialData.password);

  await credentialRepository.createCredential({
    ...credentialData,
    password: encryptedPassword,
  });
}

export async function getCredentials(userId: number) {
  const credentials = await credentialRepository.getUserCredentials(userId);
  if (!credentials) {
    throw notFoundError(
      "The user doesn't have any credentials"
    );
  }
  return credentials.map(credential => {
    const { password } = credential;
    return { ...credential, password: decryptAddedPassword(password) };
  });
}

export async function getCredential(credentialId: number, userId: number) {
  const credential = await credentialRepository.getEspecificUserCredential(credentialId, userId);
  if (!credential) {
    throw notFoundError(
      "Credential not found"
    );
  }

  const decrypted = decryptAddedPassword(credential.password);
  return { ...credential, password: decrypted };
}

export async function removeCredential(id: number, userId: number) {
  await getCredential(id, userId);
  await credentialRepository.removeCredential(id);
}
