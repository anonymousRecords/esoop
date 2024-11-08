export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

export interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

export interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

export interface RadioCardGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

export interface CheckboxOption {
  label: string;
  value: string;
  description?: string;
}

export interface CheckboxGroupProps {
  label?: string;
  description?: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
  error?: string;
  className?: string;
}
