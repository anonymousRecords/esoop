import SellingForm from '@/components/selling-form/selling-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '비즈니스 매각 신청 | 비즈토스',
  description:
    '비즈토스에서 안전하고 편리하게 비즈니스 매각을 신청하세요. 5-10분이면 매각 신청이 완료됩니다.',
  openGraph: {
    title: '비즈니스 매각 신청 | 비즈토스',
    description:
      '비즈토스에서 안전하고 편리하게 비즈니스 매각을 신청하세요. 5-10분이면 매각 신청이 완료됩니다.',
    url: 'https://www.biztoss.co.kr/sellingform',
    siteName: '비즈토스',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // TO DO: 실제 OG 이미지 경로로 수정 필요
        width: 1200,
        height: 630,
        alt: '비즈토스 매각 신청 폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // TO DO: 실제 이미지 경로로 수정 필요
    title: '비즈니스 매각 신청 | 비즈토스',
    description:
      '비즈토스에서 안전하고 편리하게 비즈니스 매각을 신청하세요. 5-10분이면 매각 신청이 완료됩니다.',
    images: ['/og-image.png'], // TO DO: 실제 Twitter 카드 이미지 경로로 수정 필요
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.biztoss.co.kr/selliingform',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function SellingFormPage() {
  return <SellingForm />;
}
