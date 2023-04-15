import { Document } from "@prisma/client";

export type createDocumentData = Omit<Document, "id" | "createdAt" | "userId">;
