export type IType = "base" | "link";

export interface IButton {
  type?: IType;
  style?: any;
  onClick?: () => void;
  children: React.ReactChild;
  disabled?: boolean;
}

export type IColors = {
  bg: {
    [key: string]: string;
    base: string;
    baseHover: string;
    link: string;
    linkHover: string;
  };
  font: {
    [key: string]: string;
    base: string;
    link: string;
  };
  pulsar: {
    [key: string]: string;
    base: string;
    link: string;
  };
};

export interface IWrapper {
  style: any;
  type: IType;
  disabled: boolean;
}

export interface IRing {
  type: IType;
  y: number;
  x: number;
}
