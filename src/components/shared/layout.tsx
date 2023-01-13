import React from 'react';
import { LayoutProps } from '../../utils/props/props';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="font-Nunito p-10">{children}</div>;
};

export default Layout;
