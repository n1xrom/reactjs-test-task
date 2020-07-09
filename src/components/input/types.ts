export interface IHelperText {
  error: string;
  helperText: string;
}
export interface IInput {
  value?: string;
  onChange: (value: string, name: string) => void;
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: string;
  type?: string;
  name?: string;
  autofocus?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  viewHelperText?: boolean;
}
export interface IBorder {
  error: string;
  activeLabel: boolean;
  labelWidth: number;
  required: boolean;
}
export interface ILabel {
  activeLabel: boolean;
  error: string;
}
export interface IShowPassword {
  type: string;
}
