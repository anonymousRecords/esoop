import { Textarea } from '@/components/ui/textarea'; // shadcn/ui의 기본 Textarea
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export const FormTextarea = ({ name, ...props }: FormTextAreaProps) => {
  const { register } = useFormContext();

  return (
    <Textarea
      {...register(name)}
      {...props}
      className={cn(
        'w-full bg-[#F0F2F3] max-h-[80px] px-3 py-2 border-none rounded-sm focus:ring-2 focus:ring-primary-200 focus:border-primary-500',
        props.className
      )}
    />
  );
};
