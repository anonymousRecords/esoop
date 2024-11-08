import { z } from 'zod';
import { basicInformationSchema } from './basic-information';
import { businessDetailsSchema } from './business-details';
import { businessDescriptionSchema } from './business-description';
import { contactInformationSchema } from './contact-information';

export const sellingFormSchema = z.object({
  basicInformation: basicInformationSchema,
  businessDetails: businessDetailsSchema,
  businessDescription: businessDescriptionSchema,
  contactInformation: contactInformationSchema,
});
