import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
export const FormInput = ({ name, ...props }: FormInputProps) => {
  const { register } = useFormContext();

  return (
    <Input
      {...register(name)}
      {...props}
      className={cn(
        'w-full px-3 py-2 bg-[#F0F2F3] rounded-sm focus:border focus:border-primary-500',
        props.className
      )}
    />
  );
};
