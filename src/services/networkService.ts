import { User } from "@prisma/client";
import * as networkRepository from "../repositories/networkRepository.js";
import { createNetworkData } from "../types/networkTypes.js";
import { decryptAddedPassword, encryptAddedPassword } from "../utils/passwordUtils.js";

export async function createNetwork(user: User, network: createNetworkData) {
  const networkInfos = {
    ...network,
    password: encryptAddedPassword(network.password),
  };
  await networkRepository.createNetwork(user.id, networkInfos);
}

export async function getAllUserNetworks(userId: number) {
  const networks = await networkRepository.getAll(userId);
  return networks.map((network) => {
    return { ...network, password: decryptAddedPassword(network.password) };
  });
}
