export type Pages =
  | "main"
  | "plastics"
  | "paper"
  | "metal"
  | "glass"
  | "tetrapak"
  | "dangerous"
  | "battery"
  | "clothes";

export type State = {
  history: Pages[];
};

export type Action =
  | {
      type: "push_page";
      data: Pages;
    }
  | {
      type: "pop_page";
    };
