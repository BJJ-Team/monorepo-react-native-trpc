import { http, HttpResponse } from "msw";
import type {
  ObjectPathsDepthOne,
  TRPCResponse,
} from "@/msw/mockTrpcQueryResponse/types";
import { server } from "@/msw/server";
import { RouterOutput } from "@/trpc/router";

type AllRoutes = ObjectPathsDepthOne<RouterOutput>;

export const mockTRPCQueryResponse = <T extends AllRoutes>(
  query: T,
  response: TRPCResponse<AllRoutes>,
) => {
  return server.use(
    http.get(`http://localhost:3000/${query}`, () =>
      HttpResponse.json([
        {
          result: {
            data: response,
          },
        },
      ]),
    ),
  );
};
