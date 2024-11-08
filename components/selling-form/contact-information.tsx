import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FormField, FormInput, FormRadioGroup } from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import { type ContactInformationSchema } from '@/schemas/selling-form/contact-information';

type SellingFormValues = {
  contactInformation: ContactInformationSchema;
  // ... other form sections
};

export const ContactInformation = () => {
  const {
    formState: { errors },
  } = useFormContext<SellingFormValues>();

  return (
    <Card>
      {/* 추가 정보 */}
      <CardHeader>
        <CardTitle>매물 등록을 위한 기타 정보를 입력해 주세요.</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormField
          name="contactInformation.buyerContact"
          label="바이어 분과 컨택하실 연락처를 입력해주세요.(이메일, 전화번호 등)"
          description="입력하신 번호는 매물 등록 상세 페이지에 공개됩니다. 사이트에 공개되어도 무방한 메일주소/번호를 남겨주세요."
          required
        >
          <FormInput name="contactInformation.buyerContact" placeholder="" />
        </FormField>

        <FormField
          name="contactInformation.internalContact"
          label="비즈토스와 컨택하실 연락처를 입력해주세요.(이메일, 전화번호 등)"
          description="등록하신 매물이 리스트에 업로드 되면 연락을 보내드립니다. 외부에 공개되지 않는 연락처이니, 자주 사용하시는 연락처를 입력해주세요."
          required
        >
          <FormInput name="contactInformation.internalContact" placeholder="" />
        </FormField>

        <FormField
          name="contactInformation.agreeToContact"
          label="대표님 비즈니스의 거래 완료 여부를 파악하기 위해 비즈토스에서는 매달 10일 대표님께 연락을 취할 예정입니다."
          description="거래 확인 연락 응답에 동의해주셔야 매각 등록이 완료됩니다."
          required
        >
          <FormRadioGroup
            name="contactInformation.agreeToContact"
            options={[{ label: '네, 동의합니다', value: 'agree' }]}
          />
        </FormField>

        <FormField
          name="contactInformation.confirmNoRights"
          label=""
          description="앱/웹의 로고, 쇼핑몰 로고 및 각종 영상/이미지 등 사업을 영위하기 위해 필요한 각종 디자인이나 이름 등에 대하여 타인의 상표권, 저작권및 기타 권리를 침해한 사실이 없습니다."
          required
        >
          <FormRadioGroup
            name="contactInformation.confirmNoRights"
            options={[{ label: '네, 없습니다', value: 'agree' }]}
          />
        </FormField>
      </CardContent>
    </Card>
  );
};
