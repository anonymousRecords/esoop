import { SellingFormValues } from "@/types/selling-form";

export const validateFormData = (data: SellingFormValues) => {
  const errors: string[] = [];

  if (
    !data.contactInformation.agreeToContact ||
    !data.contactInformation.confirmNoRights
  ) {
    errors.push('필수 동의 항목을 확인해주세요.');
  }

  if (
    String(data.basicInformation.businessType) === 'custom' &&
    !data.basicInformation.customBusinessType
  ) {
    errors.push('직접 입력한 서비스 분야를 입력해주세요.');
  }

  return errors;
};
