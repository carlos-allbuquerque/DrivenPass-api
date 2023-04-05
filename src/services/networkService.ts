import { User } from "@prisma/client";
import * as networkRepository from "../repositories/networkRepository.js";
import { createNetworkData } from "../types/networkTypes";
import { encryptAddedPassword } from "../utils/passwordUtils";

export async function createNetwork(user: User, network: createNetworkData) {
  const networkInfos = {
    ...network,
    password: encryptAddedPassword(network.password),
  };
  await networkRepository.createNetwork(user.id, networkInfos);
}
