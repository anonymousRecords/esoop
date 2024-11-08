import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  options: ReadonlyArray<CheckboxOption> | CheckboxOption[];
  name: string;
  defaultValue?: string[];
  className?: string;
}

export const FormCheckboxGroup = ({
  options,
  name,
  defaultValue = [],
  className,
}: CheckboxGroupProps) => {
  const { setValue, watch } = useFormContext();
  const values = watch(name) || defaultValue;

  const handleCheckedChange = (
    value: string,
    checked: boolean | 'indeterminate'
  ) => {
    const newValues = checked
      ? [...values, value]
      : values.filter((v: string) => v !== value);

    setValue(name, newValues, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <CheckboxPrimitive.Root
            className={cn(
              'peer h-5 w-5 shrink-0 rounded-sm border-[1px] border-gray-300',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500'
            )}
            checked={values.includes(option.value)}
            onCheckedChange={(checked) =>
              handleCheckedChange(option.value, checked)
            }
          >
            <CheckboxPrimitive.Indicator
              className={cn('flex items-center justify-center text-current')}
            >
              <Check className="h-5 w-5 text-white strokeWidth={3}" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          <label
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed',
              'peer-disabled:opacity-70'
            )}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

FormCheckboxGroup.displayName = 'FormCheckboxGroup';
