export interface IFields {
  [key: string]: any;
  name: string;
  type: string;
  required: boolean;
  label: string;
  regex: RegExp;
  value: any;
}

export interface IProps {
  fields: {
    [key: string]: IFields;
  };
  formRef?: any;
  callback?: (values: any) => void;
  styles?: string;
  width?: string;
}

export interface IFormfields {
  [name: string]: string;
}

export interface IError {
  [name: string]: string;
}

export interface IForm {
  styles: string;
  width: string;
}
