import { State, Action } from "./types";
import { initialState } from "./App";

export const reducer = (state: any = initialState, action: Action) => {
  console.log(JSON.stringify(state));
  switch (action.type) {
    case "push_page":
      return { ...state, history: [...state.history, action.data] };
    case "pop_page":
      return {
        ...state,
        history: state.history.slice(0, state.history.length - 1),
      };

    default:
      throw new Error();
  }
};
