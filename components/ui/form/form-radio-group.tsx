import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[] | readonly RadioOption[];
  name: string;
  defaultValue?: string;
  className?: string;
}

export const FormRadioGroup = ({
  options,
  name,
  defaultValue,
  className,
}: RadioGroupProps) => {
  const { register } = useFormContext();

  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="relative flex items-center">
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              defaultChecked={defaultValue === option.value}
              className={cn(
                'peer appearance-none w-6 h-6 border-2 rounded-full',
                'border-gray-200 cursor-pointer transition-colors'
              )}
            />
            <div
              className={cn(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                'w-3.5 h-3.5 rounded-full bg-primary-500 opacity-0',
                'peer-checked:opacity-100 transition-opacity'
              )}
            />
          </div>
          <span className="text-base text-text-900">{option.label}</span>
        </label>
      ))}
    </div>
  );
};
