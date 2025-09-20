'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  icon?: string;
  iconRight?: string;
  variant?: 'primary' | 'secondary' | 'text' | 'custom';
  children: ReactNode;
  className?: string;
}

export default function Button({
  loading = false,
  variant = 'primary',
  icon,
  iconRight,
  children,
  className = '',
  ...props
}: ButtonProps) {
  let buttonClasses = 'flex items-center text-btn h-fit py-3 rounded-xl focus:outline-none';
  let textClasses = '';
  let iconClasses = '';

  // Apply variant-specific classes
  if (variant === 'primary') {
    buttonClasses += ' px-4 bg-primary text-white hover:bg-primary-light focus:ring-blue-500';
    iconClasses += ' whiten';
  } else if (variant === 'secondary') {
    buttonClasses += ' px-4 bg-primary-light text-white hover:bg-primary-light focus:ring-gray-500';
    iconClasses += ' whiten';
  } else if (variant === 'text') {
    textClasses += ' text-link hover:underline hover:text-primary-light focus:underline';
  } else if (variant === 'custom') {
    // Do nothing, allow full control via `className`
  }

  return (
    <button
      disabled={loading || props.disabled}
      className={`${buttonClasses} ${className}`}
      {...props}
    >
      {icon && <Icon className={`${iconClasses} mr-2`} icon={icon} />}
      <span className={textClasses}>{children}</span>
      {iconRight && <Icon className={`${iconClasses} ml-2`} icon={iconRight} />}
    </button>
  );
}

function Icon({ icon, className }: { icon: string; className?: string }) {
  return (
    <Image
      src={`/icons/${icon}.svg`}
      alt="Icon"
      className={className}
      width={20}
      height={20}
    />
  );
}
