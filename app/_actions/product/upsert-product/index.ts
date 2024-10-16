"use server";

import { upsertProductSchema } from "./schema";
import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { actionClient } from "@/app/_lib/safe-action";

export const upsertProduct = actionClient
  .schema(upsertProductSchema)
  .action(async ({ parsedInput: { id, ...data } }) => {
    upsertProductSchema.parse(data);
    await db.product.upsert({
      where: { id: id ?? "" },
      update: data,
      create: data,
    });

    revalidatePath("/products");
  });
