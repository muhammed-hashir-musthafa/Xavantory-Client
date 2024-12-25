// components/ShadCN/ui/text.tsx
import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'lg' | 'xl';
  weight?: 'normal' | 'semibold' | 'bold';
}

export const Text: React.FC<TextProps> = ({ children, className = '', size = 'sm', weight = 'normal' }) => {
  const sizes = {
    sm: 'text-sm',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const weights = {
    normal: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <p className={`${sizes[size]} ${weights[weight]} ${className}`}>
      {children}
    </p>
  );
};

 