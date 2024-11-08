import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface ValidationModalProps {
  errors: string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ValidationModal = ({
  open,
  onOpenChange,
  errors,
}: ValidationModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn('max-w-[290px] md:max-w-[290px] rounded-sm')}
      >
        <DialogTitle
          className={cn(
            'text-[13px] text-text-900 text-center py-[55px] px-[15px] border-b-2 flex flex-col items-center justify-center'
          )}
        >
          <p className={cn('mb-2')}>필수 항목을 입력하여 주시기 바랍니다.</p>
          {errors.map((error, index) => (
            <div
              key={index}
              className={cn('text-[8px] text-text-900 font-bold')}
            >
              {error}
            </div>
          ))}
        </DialogTitle>

        <button
          className={cn(
            'text-[12px] text-text-900 font-bold focus:outline-none py-[10px]'
          )}
          onClick={() => onOpenChange(false)}
        >
          확인
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ValidationModal;
