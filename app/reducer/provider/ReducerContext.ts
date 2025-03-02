import { createContext } from "react";
import type { ActionDispatch } from "react";

import { initialState } from "..";
import type { Action, IState } from "..";

export const ReducerContext = createContext<[IState, ActionDispatch<[Action]>]>(
  [
    initialState,
    () => {
      const error = "Wrap the app in a <ReducerProvider>";

      console.error(error);
      throw Error(error);
    },
  ]
);
