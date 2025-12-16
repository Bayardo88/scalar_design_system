import React from 'react';

// Design-system driven props (feel free to expand this per tokens)
type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded focus:outline-none transition';

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 disabled:bg-neutral-300',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 disabled:bg-neutral-200',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300',
  };

  const className = [
    baseStyles,
    sizeClasses[size],
    variantClasses[variant],
    disabled ? 'cursor-not-allowed opacity-50' : '',
  ].join(' ');

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
