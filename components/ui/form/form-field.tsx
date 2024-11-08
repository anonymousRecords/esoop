import { cn } from '@/lib/utils';

interface FormFieldProps {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  description?: string;
  children: React.ReactNode;
}

export const FormField = ({
  name,
  label,
  error,
  required,
  description,
  children,
}: FormFieldProps) => (
  <div className={cn('space-y-2')}>
    <label
      htmlFor={name}
      className={cn(
        'flex items-center gap-2 text-[16px] md:font-medium font-bold text-text-900'
      )}
    >
      {label}{' '}
      {!description && required && (
        <div className={cn('bg-red-500 rounded-full w-1 h-1')}></div>
      )}
    </label>
    <div className={cn('flex items-center gap-2')}>
      {description && (
        <p className={cn('text-[13px] text-text-900')}>{description}</p>
      )}
      {description && required && (
        <div className={cn('bg-red-500 rounded-full w-1 h-1')}></div>
      )}
    </div>
    {children}
    {error && <p className={cn('text-sm text-red-500')}>{error}</p>}
  </div>
);
