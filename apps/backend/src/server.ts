import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { initRuntimeContext } from "@/trpc/context";
import { appRouter } from "@/trpc/router";

const server = createHTTPServer({
  createContext: () => {
    return initRuntimeContext();
  },
  router: appRouter,
});

const port = 3000;

server.listen(port, () => {
  console.log("Server listing on port", port);
});
