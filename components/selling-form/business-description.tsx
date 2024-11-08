import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { FormField, FormInput, FormTextarea } from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import { type BusinessDescriptionSchema } from '@/schemas/selling-form/business-description';

type SellingFormValues = {
  businessDescription: BusinessDescriptionSchema;
  // ... other form sections
};

export const BusinessDescription = () => {
  const { watch } = useFormContext<SellingFormValues>();
  const description = watch('businessDescription.description') || '';

  return (
    <Card>
      <CardHeader>
        <CardTitle>대표님의 비즈니스를 비즈토스에 홍보해주세요.</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          name="businessDescription.title"
          label="대표님의 비즈니스를 어필할 수 있는 매물 제목을 정해주세요."
          description="매물등록 시 제목으로 등록되는 답변입니다. 예 : 심플하고 러블리한 1020대 쇼핑몰"
          required
        >
          <FormInput name="businessDescription.title" placeholder="" />
        </FormField>

        <FormField
          name="businessDescription.description"
          label="대표님의 비즈니스를 Buyer 분들에게 최대한 어필할 수 있도록 비즈니스 설명을 적어주세요."
          description=" * 추천항목 : 이 비즈니스의 특징 및 차별성/ 장점, 이 비즈니스를 어떤 성향의 대표님께 추천하는지, 비즈니스 시작 계기, 매각을 결정하게 된 사유 등"
          required
        >
          <FormTextarea
            name="businessDescription.description"
            placeholder=""
            rows={8}
          />
        </FormField>
      </CardContent>
    </Card>
  );
};
