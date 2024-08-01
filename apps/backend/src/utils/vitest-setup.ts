import { afterAll, beforeAll, vi } from "vitest";

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(Date.UTC(2024, 5, 20, 11));
});

afterAll(() => {
  vi.useRealTimers();
});
