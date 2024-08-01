import { useContext } from "react";
import { TRPCApiClientContext } from "@/providers/ApiProvider";

export const useApiClient = () => {
  const apiClient = useContext(TRPCApiClientContext);

  if (apiClient === undefined) {
    throw new Error(
      "useApiClient must be used within an TRPCApiClientContext.Provider",
    );
  }

  return apiClient;
};
