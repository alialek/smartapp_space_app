import React, {
  FC,
  memo,
  useReducer,
  useState,
  useRef,
  useEffect,
} from "react";
import {
  createSmartappDebugger,
  createAssistant,
  AssistantAppState,
} from "@sberdevices/assistant-client";
import "./App.css";

import { reducer } from "./store";
import {
  getDateByNumber,
  getTodayNumber,
} from "./functions";

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

export const App: FC = memo(() => {
  const [appState, dispatch] = useReducer(reducer, {
    day: {
      holidays_details: [],
      holidays: [],
      names: [],
      url: '',
      date: 0
    }
  });

  const [todayNumber] = useState(getTodayNumber());

  const assistantStateRef = useRef<AssistantAppState>();
  const assistantRef = useRef<ReturnType<typeof createAssistant>>();

  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current);

    assistantRef.current.on("data", ({ action }: any) => {
      if (action) {
        dispatch(action);
      }
    });

    dispatch({ type: "load_day", date: getTodayNumber() })
  }, []);

  return (
    <main className="container">
      <div className="info_panel info_panel_bold">
        {`Какие праздники ${getDateByNumber(appState.day.date)}`}
      </div>
      <div className="info_panel">
        <div className="info_panel_title">Праздники</div>
        <div className="info_panel_list">
          {appState.day.holidays.map((holiday, index) => (
            <div
              key={index}
              className="holiday"
            >
              {holiday}
            </div>
          ))}
          {appState.day.holidays.length === 0 && `-`}
        </div>
      </div>
      <div className="info_panel">
        <div className="info_panel_title">Именины отмечают</div>
        <div className="info_panel_list">
          {appState.day.names.map((name, index) => `${name}${(appState.day.names.length -1) !== index ? ', ' : ''}`)}
          {appState.day.names.length === 0 && `-`}
        </div>
      </div>
      <div className="info_panel">
        <div className="info_panel_title">Православные праздники</div>
        <div className="info_panel_list">
          {appState.day.holidays_details.map((holiday_details, index) => (
            <div
              key={index}
              className="holiday"
            >
              {holiday_details}
            </div>
          ))}
          {appState.day.holidays_details.length === 0 && `-`}
        </div>
      </div>
      <div
        className={todayNumber !== appState.day.date ? "info_panel_group info_panel_group_small" : "info_panel_group" }
      >
        <div
          className="info_panel"
          style={appState.day.date === 0 ? { pointerEvents: 'none', 'opacity': 0.5 } : {}}
          onClick={() => dispatch({ type: "load_day", date: appState.day.date - 1 }) }
        >
          {todayNumber === appState.day.date ? `< Вчера` : `< День назад` }
        </div>
        {todayNumber !== appState.day.date && (
          <div
            className="info_panel"
            onClick={() => dispatch({ type: "load_day", date: todayNumber }) }
          >
            Сегодня
          </div>
        )}
        <div
          className="info_panel"
          style={appState.day.date === 365 ? { pointerEvents: 'none', 'opacity': 0.5 } : {}}
          onClick={() => dispatch({ type: "load_day", date: appState.day.date + 1 }) }
        >
          {todayNumber === appState.day.date ? `Завтра >` : `День вперед >` }
        </div>
      </div>
    </main>
  );
});
