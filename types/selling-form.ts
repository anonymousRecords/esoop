import { sellingFormSchema } from '@/schemas/selling-form';
import { z } from 'zod';

export type BusinessType =
  | 'shopping'
  | 'website'
  | 'application'
  | 'solution'
  | 'custom';

export type ProfitRange =
  | 'under10'
  | '10to100'
  | '100to500'
  | '500to1000'
  | '1000to3000'
  | 'over3000';

export type NegotiationStatus = 'negotiable' | 'non-negotiable';

export type SellingFormValues = z.infer<typeof sellingFormSchema>;