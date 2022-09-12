import { createCredential, searchCredential } from "../repositories/credentialRepository.js";
import { CredentialData } from "../types/credentialType.js";
import error from "../types/errorType.js";
import { encryptAddedPassword } from "../utils/passwordUtils.js";

export async function create(credentialData: CredentialData) {
    const alreadyExistsInUser = await searchCredential(credentialData.title, credentialData.userId);
    if (alreadyExistsInUser) throw <error>{ code: "conflict", message:"User already has a credential with this title"};
    const encryptedPassword = encryptAddedPassword(credentialData.password);

    return await createCredential({...credentialData, password: encryptedPassword });
}
