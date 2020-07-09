export interface ISkeletonStyledProps {
  circle?: boolean;
  width?: string;
  height?: string;
  styles?: string;
}

export interface ISkeletonProps extends ISkeletonStyledProps {
  children?: React.ReactNode;
  data: any;
  test?: boolean;
}
export interface ISkeletonWrapper extends ISkeletonStyledProps {
  visible: boolean;
}
