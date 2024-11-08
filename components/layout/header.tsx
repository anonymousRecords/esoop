'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: '매물 둘러보기', href: '#' },
    { label: '비즈니스 매각신청', href: '#', isHighlighted: true },
    { label: '플랜 안내', href: '#' },
    { label: '비즈토스 FAQ', href: '#' },
    { label: 'About us', href: '#' },
  ];

  return (
    <header
      className={cn(
        'w-full border-b border-border z-20 fixed md:relative bg-white'
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto px-4 h-16 flex items-center justify-between md:justify-between'
        )}
      >
        {/* 로고 */}
        <Link href="/" className={cn('flex items-center')}>
          <div
            className={cn(
              'relative md:w-[86.7px] md:h-[18px] w-[116px] h-[24px]'
            )}
          >
            <Image
              src="/image/logo.png"
              alt="Biztoss Logo"
              className={cn('object-contain')}
              fill
              priority
            />
          </div>
        </Link>

        {/* 데스크탑 */}
        <nav className={cn('hidden md:flex items-center space-x-8')}>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'text-sm hover:text-primary-500 transition-colors',
                item.isHighlighted ? 'text-primary-500' : 'text-text-900'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className={cn('hidden md:flex')}>
          {/* TO DO : 임시 데이터 삭제 */}
          <Link
            href="#"
            className={cn(
              'text-sm text-text-900 hover:text-primary-500 transition-colors'
            )}
          >
            유저 이름
          </Link>
        </nav>

        {/* 모바일 */}
        <button
          className={cn('md:hidden p-2')}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={cn('space-y-1.5')}>
            <span className={cn('block w-5 h-0.5 bg-text-900')}></span>
            <span className={cn('block w-5 h-0.5 bg-text-900')}></span>
            <span className={cn('block w-5 h-0.5 bg-text-900')}></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
