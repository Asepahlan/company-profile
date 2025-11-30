/**
 * Reusable button component with loading state, multiple variants, and sizes
 * @param variant - Visual style of the button (primary, secondary, outline, ghost, link)
 * @param size - Size of the button (sm, md, lg)
 * @param isLoading - Shows loading spinner and disables button when true
 * @param disabled - Disables the button
 * @param className - Additional CSS classes
 * @param children - Button content
 * @param asChild - Renders as child component (for composition)
 * @param props - Additional button HTML attributes
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  asChild?: boolean;
  loadingText?: string;
}

const buttonVariants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
  secondary: 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-600',
  outline: 'border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/30',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800',
  link: 'bg-transparent text-blue-700 hover:underline p-0 h-auto dark:text-blue-400',
  danger: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800',
} as const;

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  icon: 'p-2',
} as const;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      children,
      isLoading = false,
      disabled = false,
      fullWidth = false,
      loadingText = 'Memproses...',
      asChild = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      'inline-flex items-center justify-center',
      'rounded-lg font-semibold',
      'transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
      'disabled:opacity-50 disabled:pointer-events-none',
      'whitespace-nowrap',
      size !== 'icon' && 'px-6 py-3', // Default padding for non-icon buttons
      fullWidth && 'w-full',
      buttonVariants[variant],
      buttonSizes[size],
    ];

    const loadingStyles = isLoading ? 'relative text-transparent' : '';
    const disabledStyles = disabled ? 'cursor-not-allowed' : '';

    return (
      <button
        type={type}
        className={cn(
          baseStyles,
          loadingStyles,
          disabledStyles,
          className
        )}
        ref={ref}
        disabled={isLoading || disabled}
        aria-busy={isLoading}
        aria-live={isLoading ? 'polite' : 'off'}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>{loadingText}</span>
          </span>
        )}
        <span className={cn('inline-flex items-center', isLoading && 'invisible')}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };