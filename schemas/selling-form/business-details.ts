import { z } from 'zod';

export const businessDetailsSchema = z.object({
  monthlyProfit: z.enum([
    'under_100k',
    '100k_to_1m',
    '1m_to_5m',
    '5m_to_10m',
    '10m_to_30m',
    'over_30m',
  ]),
  desiredPrice: z.string().min(1, '희망 매각가를 입력해주세요'),
  isPriceNegotiable: z.enum(['agree', 'disagree']),
});

export type BusinessDetailsSchema = z.infer<typeof businessDetailsSchema>;
