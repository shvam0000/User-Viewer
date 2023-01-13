export type BadgeProps = {
  type: 'primary' | 'secondary';
  children: JSX.Element;
};

export type ButtonProps = {
  type: 'primary' | 'secondary';
  children: JSX.Element;
  handleClick?: () => void;
};

export type LayoutProps = {
  children: JSX.Element;
};
