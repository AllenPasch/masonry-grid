import { useReducer } from "react";

import { initialState, reducer } from ".";
import type { Action, IState } from ".";

export const useMasonryReducer = () =>
  useReducer<IState, [Action]>(reducer, initialState);
