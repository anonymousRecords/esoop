import { Card, CardContent } from '@/components/ui/card';
import { FormField, FormRadioGroup, FormInput } from '@/components/ui/form';
import { type BusinessDetailsSchema } from '@/schemas/selling-form/business-details';

const MONTHLY_PROFIT_OPTIONS = [
  { label: '거의 없음 (10만원 이하)', value: 'under_100k' },
  { label: '10~100만원', value: '100k_to_1m' },
  { label: '100~500만원', value: '1m_to_5m' },
  { label: '500~1000만원', value: '5m_to_10m' },
  { label: '1000~3000만원', value: '10m_to_30m' },
  { label: '3000만원 이상', value: 'over_30m' },
] as const;

type SellingFormValues = {
  businessDetails: BusinessDetailsSchema;
  // ... other form sections
};

export const BusinessDetails = () => {
  return (
    <Card>
      {/* 매각 정보 */}
      <CardContent className="space-y-6">
        <FormField
          name="businessDetails.monthlyProfit"
          label="해당 서비스의 대략적인 월 영업이익을 선택해 주세요."
          required
        >
          <FormRadioGroup
            name="businessDetails.monthlyProfit"
            options={MONTHLY_PROFIT_OPTIONS}
          />
        </FormField>

        <FormField
          name="businessDetails.desiredPrice"
          label="해당 서비스의 희망 매각가를 알려주세요."
          description="구체적인 가격이 정해지지 않았다면, 금액대를 입력하셔도 좋습니다."
          required
        >
          <FormInput name="businessDetails.desiredPrice" placeholder="" />
        </FormField>

        <FormField
          name="businessDetails.isPriceNegotiable"
          label="가격 협의 가능 여부를 선택해주세요."
          required
        >
          <FormRadioGroup
            name="businessDetails.isPriceNegotiable"
            options={[
              { label: '협의 가능', value: 'agree' },
              { label: '협의 불가', value: 'disagree' },
            ]}
          />
        </FormField>
      </CardContent>
    </Card>
  );
};
