import React, { ReactElement, ReactNode } from "react";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {
  render,
  renderHook,
  RenderOptions,
} from "@testing-library/react-native";
import { SafeAreaView } from "@/components/SafeAreaView";
import { ApiProvider } from "@/providers";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ApiProvider>
      <PaperProvider theme={MD3LightTheme}>
        <SafeAreaView>{children}</SafeAreaView>
      </PaperProvider>
    </ApiProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook: typeof renderHook = (render, options) =>
  renderHook(render, {
    wrapper: AllTheProviders,
    ...options,
  });

// eslint-disable-next-line @typescript-eslint/no-restricted-imports
export * from "@testing-library/react-native";

export { customRender as render };
export { customRenderHook as renderHook };
