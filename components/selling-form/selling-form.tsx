'use client';

import { FormProvider } from 'react-hook-form';
import { BasicInformation } from '@/components/selling-form/basic-information';
import { BusinessDetails } from '@/components/selling-form/business-details';
import { BusinessDescription } from '@/components/selling-form/business-description';
import { ContactInformation } from '@/components/selling-form/contact-information';
import InfoBanner from '@/components/ui/info-banner';
import { cn } from '@/lib/utils';
import FormInfoSection from '@/components/ui/form/form-info-section';
import ValidationModal from '@/components/ui/validation-modal';
import { useSellingForm } from '@/hooks/useSellingForm';
import { useValidation } from '@/hooks/useValidation';
import { prepareSubmitData } from '@/utils/form-submission';
import { SubmitButton } from '@/components/ui/submit-button';
import { SellingFormValues } from '@/types/selling-form';

export default function SellingForm() {
  const methods = useSellingForm();
  const {
    showValidationModal,
    setShowValidationModal,
    validationErrors,
    handleValidation,
  } = useValidation();

  const handleFormSubmit = async (data: SellingFormValues) => {
    try {
      if (!handleValidation(data)) return;

      const submitData = prepareSubmitData(data);
      console.log('Submit data:', JSON.stringify(submitData, null, 2));
      // TODO: API 호출 로직
    } catch (error) {
      console.error('Form submission error:', error);
      setShowValidationModal(true);
    }
  };

  return (
    <div
      className={cn('flex flex-col justify-center items-center pt-16 md:pt-0')}
    >
      <FormProvider {...methods}>
        <main className="md:max-w-[1066.66px] px-[31px] pb-[77px] md:pb-[126px]">
          <div className={cn('md:mt-[60px] mt-[34px]')}>
            <InfoBanner />
          </div>
          <h1 className="md:text-4xl text-[21px] font-bold text-text-900 md:mt-[70px] mt-[54px] md:mb-[38px] mb-[25px]">
            비즈니스 매각 신청 폼
          </h1>
          <FormInfoSection />
          <form
            onSubmit={methods.handleSubmit(handleFormSubmit)}
            className="space-y-8 mt-[40px] md:mt-[44px]"
          >
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-8">
                <BasicInformation />
                <BusinessDetails />
              </div>
              <div className="space-y-8">
                <BusinessDescription />
                <ContactInformation />
              </div>
            </div>
            <SubmitButton isSubmitting={methods.formState.isSubmitting} />
          </form>
        </main>
      </FormProvider>
      <ValidationModal
        open={showValidationModal}
        onOpenChange={setShowValidationModal}
        errors={validationErrors}
      />
    </div>
  );
}
