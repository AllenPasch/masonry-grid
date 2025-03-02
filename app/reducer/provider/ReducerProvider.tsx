import { useReducer } from "react";

import { initialState, reducer } from "..";
import type { Action, IState } from "..";
import { ReducerContext } from ".";

interface IProps {
  readonly children: React.ReactNode;
}

export const ReducerProvider = ({ children }: IProps) => {
  const stateDispatch = useReducer<IState, [Action]>(reducer, initialState);

  return (
    <ReducerContext.Provider value={stateDispatch}>
      {children}
    </ReducerContext.Provider>
  );
};
