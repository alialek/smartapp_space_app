import { data } from "./data";

type State = {
  day: {
    holidays_details: Array<string>;
    holidays: Array<string>;
    names: Array<string>;
    url: string;
    date: number;
  };
};

type Action =
  | {
    type: "load_day";
    date: number;
  };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "load_day":
      return {
        ...state,
        day: {
          ...data[action.date],
          date: action.date
        },
      };

    default:
      throw new Error();
  }
};