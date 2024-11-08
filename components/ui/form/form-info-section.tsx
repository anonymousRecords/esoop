import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const FormInfoSection = () => {
  return (
    <div className={cn('w-full')}>
      <div className={cn('w-full bg-[#ECEDF0] rounded-lg p-6 space-y-2')}>
        {/* 예상 소요시간 */}
        <div className={cn('flex items-center gap-2')}>
          <Image src="/icon/clock.png" alt="clock" width={24} height={24} />
          <p className={cn('text-text-900')}>
            매물 등록 예상 소요시간 :
            <span className={cn('text-[#002AFE] font-black ml-1')}>
              5 ~ 10분
            </span>
          </p>
        </div>

        {/* 매물 둘러보기 안내 */}
        <div className={cn('flex items-center gap-2')}>
          <Image src="/icon/pencil.png" alt="pencil" width={24} height={24} />
          <p className={cn('text-text-900')}>
            폼을 작성완료하면 대표님의 서비스가{' '}
            <Link
              href="#"
              className={cn('text-[#002AFE] font-black hover:underline')}
            >
              [매물 둘러보기]
            </Link>
            에 게시돼요.
          </p>
        </div>

        {/* NDA 안내 */}
        <div className={cn('flex items-center gap-2')}>
          <Image src="/icon/secure.png" alt="secure" width={24} height={24} />
          <p className={cn('text-text-900')}>
            대표님께서 작성한 매물 정보는{' '}
            <span className={cn('text-[#002AFE] font-black')}>
              비밀유지계약서 (NDA)
            </span>
            를 작성한 Buyer 분들에게만 공개돼요. 사업정보 유출에 대해 안심하셔도
            돼요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormInfoSection;
