import * as M from "../repositories/credentialRepository.js";
import { CredentialData } from "../types/credentialType.js";
import error from "../types/errorType.js";
import * as U from "../utils/passwordUtils.js";

export async function create(credentialData: CredentialData) {
  const alreadyExistsInUser = await M.searchCredential(
    credentialData.title,
    credentialData.userId
  );
  if (alreadyExistsInUser)
    throw <error>{
      code: "conflict",
      message: "User already has a credential with this title",
    };
  const encryptedPassword = U.encryptAddedPassword(credentialData.password);

  return await M.createCredential({
    ...credentialData,
    password: encryptedPassword,
  });
}

export async function getCredentials(userId: number) {
  const userCredentials = await M.getUserCredentials(userId);
  if (!userCredentials) {
    throw <error>{
      code: "notFound",
      message: "User does not have any credentials registered in the system",
    };
  }
  const newList = [];
  userCredentials.forEach((item) =>
    newList.push({ ...item, password: U.decryptAddedPassword(item.password) })
  );
  return newList;
}

export async function getCredential(credentialId: number, userId: number) {
  const credential = await M.getEspecificUserCredential(credentialId, userId);
  if (!credential) {
    throw <error>{
      code: "notFound",
      message: "the user does not own any credentials whith the informed id",
    };
  }

  const decrypted = U.decryptAddedPassword(credential.password);
  return { ...credential, password: decrypted };
}

export async function removeCredential(id: number) {
  const credential = await M.removeCredential(id);
  if (!credential)
    throw <error>{ code: "notFound", message: "credential not found" };
}
