import type { SellingFormValues } from '@/types/selling-form';

export const prepareSubmitData = (data: SellingFormValues) => {
  return {
    basicInformation: {
      sellingConsideration: data.basicInformation.sellingConsideration,
      serviceCategory:
        String(data.basicInformation.businessType) === 'custom'
          ? data.basicInformation.customBusinessType
          : data.basicInformation.businessType,
      serviceName: data.basicInformation.serviceName,
      serviceUrl: data.basicInformation.serviceUrl || null,
      businessRegistration: data.basicInformation.businessLicense || null,
    },
    businessDetails: {
      monthlyProfit: data.businessDetails.monthlyProfit,
      desiredPrice: data.businessDetails.desiredPrice,
      isPriceNegotiable: data.businessDetails.isPriceNegotiable,
    },
    businessDescription: {
      title: data.businessDescription.title,
      description: data.businessDescription.description,
    },
    contactInformation: {
      buyerContact: data.contactInformation.buyerContact,
      biztossContact: data.contactInformation.internalContact,
      agreeToContact: data.contactInformation.agreeToContact,
      confirmNoRights: data.contactInformation.confirmNoRights,
    },
  };
};
