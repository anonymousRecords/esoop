import { z } from 'zod';

export const businessDescriptionSchema = z.object({
  title: z.string().min(1, '매물 제목을 입력해주세요'),
  description: z
    .string()
    .min(1, '비즈니스 설명을 입력해주세요')
    .max(2000, '비즈니스 설명은 2000자를 초과할 수 없습니다'),
});

export type BusinessDescriptionSchema = z.infer<
  typeof businessDescriptionSchema
>;
