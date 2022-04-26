export interface Form {
    fieldset: Fieldset[];
}

export interface Fieldset {
    label: string;
    row: FormRow[];
}

export interface FormRow {
    column: FormCol[];
}

export interface FormCol {
    span: '25%' | '50%' | '100%';
    fields: (FormInput | FormSelect | FormTextArea)[];
}

export interface FormField {
    id: string;
    type: InputTypes;
    name: string;
    label: string;
    isRequired?: boolean;
    requiredMessage?: string;
    autocomplete?: boolean;
    disabled?: boolean;
}

export interface FormInput extends FormField {
    value?: string | number | boolean;
    placeholder?: string;
    pattern?: {
        value: RegExp;
        message?: string;
    };
    maxLength?: {
        value: number;
        message?: string;
    };
    minLength?: {
        value: number;
        message?: string;
    };
}

export interface FormSelect extends FormField {
    type: 'select';
    options: Option[];
}

export interface FormTextArea extends FormField {
    type: 'textarea';
    value?: string;
    rows?: number;
    cols?: number;
    maxLength?: {
        value: number;
        message: string;
    };
    minLength?: {
        value: number;
        message: string;
    };
    placeholder?: string;
}

export type InputTypes = 'text' | 'radio'  | 'tel' | 'number' | 'email' | 'date' | 'checkbox' | 'select' | 'textarea'

export interface Option {
    value: string;
    selected: boolean;
}

