import { useContext } from "react";
import type { ActionDispatch } from "react";

import type { Action, IState } from "..";
import { ReducerContext } from ".";

export const useReducer = (): [IState, ActionDispatch<[Action]>] =>
  useContext(ReducerContext);
