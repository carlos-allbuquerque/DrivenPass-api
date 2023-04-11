import { Credential } from "@prisma/client";

export type createCredentialData = Omit<Credential, "id" | "createdAt" | "userId">;
