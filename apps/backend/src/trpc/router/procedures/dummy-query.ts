import { publicProcedure } from "@/trpc";

export const dummyQuery = publicProcedure.query(() => {
  return "Hello world";
});
