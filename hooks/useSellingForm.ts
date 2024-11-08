import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sellingFormSchema } from '@/schemas/selling-form';
import type { z } from 'zod';

type SellingFormValues = z.infer<typeof sellingFormSchema>;

export const useSellingForm = () => {
  return useForm<SellingFormValues>({
    mode: 'onChange',
    resolver: zodResolver(sellingFormSchema),
    defaultValues: {
      basicInformation: {
        businessType: [],
      },
      businessDetails: {},
      contactInformation: {
        buyerContact: '',
        internalContact: '',
      },
    },
  });
};
