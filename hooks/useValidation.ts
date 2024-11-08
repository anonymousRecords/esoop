import { useState } from 'react';

import type { SellingFormValues } from '@/types/selling-form';
import { validateFormData } from '@/utils/form-validation';

export const useValidation = () => {
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleValidation = (data: SellingFormValues) => {
    const errors = validateFormData(data);
    if (errors.length > 0) {
      setValidationErrors(errors);
      setShowValidationModal(true);
      return false;
    }
    return true;
  };

  return {
    showValidationModal,
    setShowValidationModal,
    validationErrors,
    handleValidation,
  };
};
