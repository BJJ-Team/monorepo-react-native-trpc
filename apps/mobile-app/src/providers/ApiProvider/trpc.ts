import type { AppRouter } from "@template/backend";
import { createTRPCReact } from "@trpc/react-query";

export const apiClient = createTRPCReact<AppRouter>();
