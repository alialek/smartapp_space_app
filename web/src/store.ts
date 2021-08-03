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
    }
  | {
    type: "load_previous_day";
    }
  | {
    type: "load_next_day";
  };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "load_day":
      return {
        ...state,
        day: {
          ...data[action.date],
          date: action.date,
        },
      };

    case "load_previous_day":
      return {
        ...state,
        day: {
          ...data[state.day.date - 1 > 0 ? state.day.date - 1 : 0],
          date: state.day.date - 1 > 0 ? state.day.date - 1 : 0,
        },
      };

    case "load_next_day":
      return {
        ...state,
        day: {
          ...data[state.day.date + 1 < 365 ? state.day.date + 1 : 364],
          date: state.day.date + 1 < 365 ? state.day.date + 1 : 364,
        },
      };

    default:
      throw new Error();
  }
};
