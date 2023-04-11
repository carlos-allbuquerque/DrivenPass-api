import * as credentialRepository from "../repositories/credentialRepository.js";
import { CredentialData } from "../types/credentialType.js";
import * as U from "../utils/passwordUtils.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";

export async function create(credentialData: CredentialData) {
  const alreadyExistsInUser = await credentialRepository.searchCredential(
    credentialData.title,
    credentialData.userId
  );
  if (alreadyExistsInUser)
    throw conflictError("Title already in use");
  const encryptedPassword = U.encryptAddedPassword(credentialData.password);

  return await credentialRepository.createCredential({
    ...credentialData,
    password: encryptedPassword,
  });
}

export async function getCredentials(userId: number) {
  const userCredentials = await credentialRepository.getUserCredentials(userId);
  if (!userCredentials) {
    throw notFoundError(
      "The user doesn't have any credentials"
    );
  }
  const newList = [];
  userCredentials.forEach((item) =>
    newList.push({ ...item, password: U.decryptAddedPassword(item.password) })
  );
  return newList;
}

export async function getCredential(credentialId: number, userId: number) {
  const credential = await credentialRepository.getEspecificUserCredential(credentialId, userId);
  if (!credential) {
    throw notFoundError(
      "Credential not found"
    );
  }

  const decrypted = U.decryptAddedPassword(credential.password);
  return { ...credential, password: decrypted };
}

export async function removeCredential(id: number, userId: number) {
  await getCredential(id, userId);
  await credentialRepository.removeCredential(id);
}
