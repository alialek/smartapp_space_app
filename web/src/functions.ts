import { dates } from "./dates";

export const getDateByNumber = (date: number) => {
  return dates[date];
};

export const getTodayNumber = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = <any>now - <any>start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day - 1;
};
