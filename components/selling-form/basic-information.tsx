import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  FormField,
  FormRadioGroup,
  FormInput,
  FormCheckboxGroup,
} from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import { type BasicInformationSchema } from '@/schemas/selling-form/basic-information';
import FormFileInput from '../ui/form/form-file-input';

const BUSINESS_TYPE_OPTIONS = [
  { label: '쇼핑몰 (자사몰, 스마트스토어, 쿠팡 등)', value: 'shopping' },
  {
    label: '웹사이트 (유튜브, 인스타 등 SNS 계정, 세금 계산기 사이트 등)',
    value: 'website',
  },
  { label: '어플리케이션 (안드로이드, ios 등)', value: 'application' },
  { label: '솔루션 (SaaS 등)', value: 'solution' },
  { label: '기타', value: 'custom' },
] as const;

type SellingFormValues = {
  basicInformation: BasicInformationSchema;
  // ... other form sections
};

export const BasicInformation = () => {
  const { watch } = useFormContext<SellingFormValues>();
  const businessTypes = watch('basicInformation.businessType') || [];

  return (
    <Card>
      {/* 기본 정보 */}
      <CardHeader>
        <CardTitle>
          대표님의 비즈니스 정보를 사실에 기반하여 작성해주세요.
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          name="basicInformation.sellingConsideration"
          label="대표님께서는 비즈니스 매각을 어느정도 고려하고 계시나요?"
          required
        >
          <FormRadioGroup
            name="basicInformation.sellingConsideration"
            options={[
              { label: '추후 매각 고려중', value: 'considering' },
              { label: '매각급함', value: 'urgent' },
            ]}
          />
        </FormField>

        <FormField
          name="basicInformation.businessType"
          label="매각하시려는 서비스의 분야를 알려주세요."
          required
        >
          <FormCheckboxGroup
            name="basicInformation.businessType"
            options={BUSINESS_TYPE_OPTIONS}
          />
        </FormField>

        {businessTypes.includes('custom') && (
          <FormInput
            name="basicInformation.customBusinessType"
            placeholder="직접 입력"
          />
        )}

        <FormField
          name="basicInformation.serviceName"
          label="해당 서비스의 이름을 알려주세요."
          required
        >
          <FormInput name="basicInformation.serviceName" placeholder="" />
        </FormField>

        <FormField
          name="basicInformation.serviceUrl"
          label="매각하려는 온라인 서비스의 URL이 있다면, 주소를 입력해주세요."
        >
          <FormInput
            name="basicInformation.serviceUrl"
            type="url"
            placeholder=""
          />
        </FormField>

        <FormField
          name="basicInformation.businessLicense"
          label="사업자등록증이 있으시다면, 파일을 업로드해주세요. (.png or .jpg 형식)"
          description=""
        >
          <FormFileInput
            name="basicInformation.businessLicense"
            accept=".jpg,.jpeg,.png"
            maxSize={5 * 1024 * 1024} // 5MB
          />
        </FormField>
      </CardContent>
    </Card>
  );
};
