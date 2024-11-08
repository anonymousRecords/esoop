import { z } from 'zod';

const BUSINESS_TYPES = [
  'shopping',
  'website',
  'application',
  'solution',
  'custom',
] as const;

export const basicInformationSchema = z.object({
  sellingConsideration: z.enum(['considering', 'urgent']),
  businessType: z
    .array(z.enum(BUSINESS_TYPES))
    .min(1, '하나 이상의 서비스 분야를 선택해주세요'),
  customBusinessType: z.string().optional(),
  serviceName: z.string().min(1, '서비스 이름을 입력해주세요'),
  serviceUrl: z
    .string()
    .trim()
    .refine(
      (val) => {
        if (!val) return true; // 빈 값이면 통과
        try {
          new URL(val);
          return true;
        } catch {
          return false;
        }
      },
      { message: 'Invalid url' }
    ),
  businessLicense: z.any().optional(), // File 타입을 위한 임시 타입
});

export type BasicInformationSchema = z.infer<typeof basicInformationSchema>;
