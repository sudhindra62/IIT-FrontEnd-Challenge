import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  // We allow passing full classNames to override or maintain exact styles 
  // from the original implementation to ensure pixel-perfect fidelity.
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
}
