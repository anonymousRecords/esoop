import { cn } from '@/lib/utils';

const InfoBanner = () => {
  return (
    <div
      className={cn(
        'bg-[#17c1a0]/10 py-[20px] px-[24px] font-black rounded-lg'
      )}
    >
      <h2 className={cn('text-base text-primary-500 mb-0.5')}>
        지금 매물을 등록하세요.
      </h2>
      <p className={cn('text-base text-primary-500')}>
        초기 매물 등록을 통해{' '}
        <span className={cn('font-black text-black')}>
          후속 Seller분들보다 더욱 많은 게시글 노출 혜택
        </span>
        <span className={cn('text-primary-500')}>을 기대할 수 있어요.</span>
      </p>
    </div>
  );
};

export default InfoBanner;
