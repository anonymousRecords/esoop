import { z } from 'zod';

export const contactInformationSchema = z.object({
  buyerContact: z.string().min(1, '바이어 컨택 연락처를 입력해주세요'),
  internalContact: z.string().min(1, '비즈토스 컨택 연락처를 입력해주세요'),
  agreeToContact: z.enum(['agree']),
  confirmNoRights: z.enum(['agree']),
});

export type ContactInformationSchema = {
  buyerContact: string;
  internalContact: string;
  agreeToContact: boolean;
  confirmNoRights: boolean;
};
