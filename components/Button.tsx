"use client"
import React, {ReactNode} from 'react';
import Image from "next/image";

export default function Button({
                                 loading,
                                 variant = 'primary',
                                 icon,
                                 iconRight,
                                 children,
                                 onClick,
                                 className
                               }: ButtonProps) {
  let buttonClasses = 'flex items-center text-btn h-fit py-3 rounded-xl focus:outline:none';
  let textClasses = '';
  let iconClasses = ''

  // Apply variant-specific classes
  if (variant === 'primary') {
    buttonClasses += ' px-4 bg-primary text-white hover:bg-primary-light focus:ring-blue-500';
    iconClasses += 'whiten'
  } else if (variant === 'secondary') {
    buttonClasses += ' px-4 bg-primary-light text-white hover:bg-primary-light focus:ring-gray-500';
    iconClasses += 'whiten'
  } else if (variant === 'text') {
    textClasses += ' text-link hover:underline hover:text-primary-light focus:underline';
    iconClasses += ''
  } else if (variant === "custom") {
    buttonClasses += ' '
    iconClasses += ' '
  }

  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={`${buttonClasses} ${className}`}
    >
      {icon && <Icon className={`${iconClasses} mr-2`} icon={icon}/>}
      <span className={textClasses}>{children}</span>
      {iconRight && <Icon className={`${iconClasses} ml-2`} icon={iconRight}/>}
    </button>
  );
};

function Icon({icon, className}: {
  icon: string,
  className?: string
}) {
  return (
    <Image
      src={`/icons/${icon}.svg`}
      alt="Icon"
      className={`${className}`}
      width={20}
      height={20}/>
  )
}

interface ButtonProps {
  loading?: boolean
  onClick: () => void;
  className?: string;
  children: ReactNode;
  icon?: string;
  iconRight?: string
  variant?: 'primary' | 'secondary' | 'text' | 'custom';
}
