import { Card } from "@prisma/client";

export type createCardData = Omit<Card, "userId" | "createdAt" | "id">;
