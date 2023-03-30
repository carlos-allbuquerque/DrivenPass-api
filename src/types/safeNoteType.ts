import { SafeNote } from "@prisma/client";

export type createSafeNoteData = Omit<SafeNote, "id" | "createdAt" | "userId">;
