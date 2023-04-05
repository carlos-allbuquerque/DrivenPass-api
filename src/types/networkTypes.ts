import { Network } from "@prisma/client";

export type createNetworkData = Omit<Network, "userId" | "createdAt" | "id">;
