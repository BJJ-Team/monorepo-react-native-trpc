import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ["./src/**/*.test.[jt]s?(x)"],
    setupFiles: ["./src/utils/vitest-setup.ts"],
  },
});
