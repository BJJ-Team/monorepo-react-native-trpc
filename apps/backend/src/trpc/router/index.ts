import { inferRouterOutputs } from "@trpc/server";
import { router } from "@/trpc";
import { dummyQuery } from "./procedures/dummy-query";

export const appRouter = router({ dummyQuery });

export type AppRouter = typeof appRouter;
export type RouterOutput = inferRouterOutputs<AppRouter>;
