import React from 'react';
import { ButtonProps } from '../../utils/props/props';

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <div
      className={`text-md px-4 py-2 rounded-md w-fit ${
        type === 'primary'
          ? 'bg-blue-400 text-gray-100'
          : 'bg-white border-2 border-gray-200 text-gray-700 font-medium'
      }`}>
      {children}
    </div>
  );
};

export default Button;
