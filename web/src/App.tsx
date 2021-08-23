import React, {
  FC,
  memo,
  useReducer,
  useState,
  useRef,
  useEffect,
  Reducer,
} from "react";
import {
  createSmartappDebugger,
  createAssistant,
  AssistantAppState,
} from "@sberdevices/assistant-client";
import "./App.css";

import { reducer } from "./store";
import { getTodayNumber } from "./functions";

import "./Eco.css";
import { Container, Header } from "@sberdevices/plasma-ui";
import Fractions from "./components/Fractions.jsx";
import { Action, Pages, State } from "./types";
import data from "./data/data";
import Fraction from "./components/Fraction";

const initializeAssistant = (getState: any) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }

  return createAssistant({ getState });
};

export const initialState: State = {
  history: ["main"],
};

export const App: FC = memo(() => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  const handleBack = () => {
    console.log("backevent");
    dispatch({ type: "pop_page" });
  };

  const assistantStateRef = useRef<AssistantAppState>();
  const assistantRef = useRef<ReturnType<typeof createAssistant>>();

  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current);
    assistantRef.current.on("data", ({ action }: any) => {
      if (action) {
        dispatch(action);
      }
    });

    // dispatch({ type: "load_day", date: getTodayNumber() });
  }, []);

  useEffect(() => {
    let element: HTMLElement = document.getElementById("main") as HTMLElement;
    element.scrollIntoView();
  }, [appState]);
  const page = appState.history[appState.history.length - 1];
  const fraction = data.filter((fr) => fr.id === page)[0];
  console.log(fraction);
  return (
    <Container className="container" id="main">
      <Header
        back={page !== "main" ? true : undefined}
        onBackClick={handleBack}
        title={"Правила раздельного сбора"}
        subtitle={fraction ? fraction.name : ""}
      ></Header>

      {page === "main" ? (
        <Fractions dispatch={dispatch} />
      ) : (
        <Fraction fraction={fraction} />
      )}
    </Container>
  );
});
