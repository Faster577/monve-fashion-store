import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  fullWidth?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    'bg-graphite text-ivory hover:bg-graphite/90 focus-visible:ring-graphite',
  secondary:
    'bg-beige text-graphite hover:bg-beige/80 focus-visible:ring-taupe',
  ghost:
    'bg-transparent text-graphite hover:bg-beige/50 focus-visible:ring-taupe',
  outline:
    'bg-transparent border border-graphite text-graphite hover:bg-graphite hover:text-ivory focus-visible:ring-graphite',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs tracking-[0.12em]',
  md: 'px-6 py-3 text-xs tracking-[0.14em]',
  lg: 'px-8 py-4 text-sm tracking-[0.16em]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      fullWidth,
      className = '',
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={`
        inline-flex items-center justify-center gap-2
        font-body font-medium uppercase
        transition-all duration-300 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        disabled:opacity-40 disabled:pointer-events-none
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
