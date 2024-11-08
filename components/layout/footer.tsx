import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Footer = () => {
  const companyInfo = {
    name: '이숲컴퍼니',
    address: '서울특별시 관악구 호암로 24길 6',
    establishmentDate: '2024.03.11',
    representative: '이상철',
    businessNumber: '573-05-02836',
    notificationNumber: '2024-서울관악-1651',
    customerCenter: '070-8065-0953',
  };

  const links = [
    { label: '이용약관', href: '#' },
    { label: '개인정보처리방침', href: '#' },
  ];

  return (
    <footer className={cn('w-full bg-[#E4E9EA] py-8 mt-auto')}>
      <div className={cn('max-w-7xl mx-auto px-4')}>
        <div className={cn('flex gap-4 mb-6')}>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm text-text-900 hover:text-primary-500 transition-colors'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={cn('space-y-2')}>
          <div className={cn('font-medium text-base text-text-900')}>
            비즈토스
          </div>
          <div className={cn('font-medium text-base text-text-900 mb-4')}>
            {companyInfo.name}
          </div>

          <div className={cn('space-y-1')}>
            <p className={cn('text-sm text-text-500')}>{companyInfo.address}</p>
            <p className={cn('text-sm text-text-500')}>
              설립일 : {companyInfo.establishmentDate}
            </p>
            <p className={cn('text-sm text-text-500')}>
              대표 : {companyInfo.representative}
            </p>
            <p className={cn('text-sm text-text-500')}>
              사업자등록번호 : {companyInfo.businessNumber}
            </p>
            <p className={cn('text-sm text-text-500')}>
              통신판매신고번호 : {companyInfo.notificationNumber}
            </p>
            <p className={cn('text-sm text-text-500')}>
              고객센터 : {companyInfo.customerCenter}
            </p>
          </div>
        </div>
      </div>

      <div className={cn('fixed bottom-6 right-6')}>
        <button
          className={cn(
            'w-[44px] h-[44px] bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-200'
          )}
          aria-label="Chat button"
        >
          <svg
            className={cn('w-6 h-6 text-white')}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
