import React, { useReducer, createContext, useEffect, useContext } from "react";

import { IProvider, IInitialState, IDispatch, IType, IMethods } from "./types";

let reducer = (state: IInitialState, { type, value }: IDispatch) => {
  return { ...state, [type]: value };
};

const initialState: IInitialState = {
  step: 0,
  someStep: 0,
  visible: true,
  formData: {
    email: "",
    password: "",
  },
  sort: true,
  userList: [...Array(10)],
  visibleErrors: false,
  errors: false,
};

const stateCtx = createContext<IInitialState>(initialState);
const dispatchCtx = createContext((type: IType, value: any) => {});
const methodsCtx = createContext<IMethods>({
  nextStep: () => {},
  changeSort: () => {},
});

const Provider: React.FC<IProvider> = ({ children }): JSX.Element => {
  const [state, _dispatch] = useReducer(reducer, initialState);
  const dispatch = (type: IType, value: any) => _dispatch({ type, value });

  useEffect(() => {
    let timer: number;
    if (state.someStep !== state.step && !state.visible) {
      timer = setTimeout(() => {
        dispatch("step", state.someStep);
        dispatch("visible", true);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.someStep, state.visible]);

  const nextStep = (number: number) => {
    if (state.errors) {
      dispatch("visibleErrors", true);
      return false;
    }
    dispatch("visibleErrors", false);
    dispatch("someStep", number);
    dispatch("visible", false);
  };

  const changeSort = () => {
    dispatch("sort", !state.sort);
  };

  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>
        <methodsCtx.Provider value={{ nextStep, changeSort }}>{children}</methodsCtx.Provider>
      </stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

const useDispatch = () => {
  return useContext(dispatchCtx);
};
const useGlobalState = () => {
  const state = useContext(stateCtx);
  return state;
};
const useGlobalMethods = () => {
  const methods = useContext(methodsCtx);
  return methods;
};

export { useDispatch, useGlobalState, useGlobalMethods, Provider };
