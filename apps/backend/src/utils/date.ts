// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import isBetween from "dayjs/plugin/isBetween";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(duration);
dayjs.extend(isBetween);

export { dayjs };
