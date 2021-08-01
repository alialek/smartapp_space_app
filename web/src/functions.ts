import { dates } from "./dates";

export const getDateByNumber = (date: number) => {
  return dates[date];
};

export const getTodayNumber = () => {
  const now: any = new Date();
  const start: any = new Date(now.getFullYear(), 0, 0);
  const diff: number = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day - 1;
};
