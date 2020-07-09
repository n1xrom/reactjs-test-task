export type IProvider = {
  children: React.ReactNode;
};
export interface IInitialState {
  step: number;
  someStep: number;
  visible: boolean;
  formData: {
    email: string;
    password: string;
  };
  sort: boolean;
  userList: any[];
  visibleErrors: boolean;
  errors: boolean;
}
export type IDispatch = {
  type: IType;
  value: any;
};
export type IType =
  | "step"
  | "visible"
  | "errors"
  | "visibleErrors"
  | "formdata"
  | "sort"
  | "formData"
  | "userList"
  | "someStep";
export interface IMethods {
  nextStep: (number: number) => void;
  changeSort: () => void;
}
export interface IUseFetchState<T> {
  response?: T | undefined;
  error?: string;
  loading: boolean;
}
export type IPath = "step1" | "step2";
