import React from 'react';
import { BadgeProps } from '../../utils/props/props';

const Badge: React.FC<BadgeProps> = ({ type, children }) => {
  return (
    <div
      className={`text-sm font-medium px-2 py-1 rounded-xl  w-fit ${
        type === 'primary'
          ? 'bg-green-100 text-green-900'
          : 'bg-gray-200 text-gray-800'
      }`}>
      {children}
    </div>
  );
};

export default Badge;
