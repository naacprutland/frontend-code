export interface Form {
    fieldset: Fieldset[];
}

export interface Fieldset {
    label: string;
    subText: string;
    rows: FormRow[];
}

export interface FormRow {
    fields: (FormInput | FormSelect | FormTextArea | FormCheckBox)[];
}

export interface FormField {
    id: string;
    span?: Span;
    type: InputTypes;
    name: string;
    label: string;
    isRequired?: boolean;
    requiredMessage?: string;
    autocomplete?: boolean;
    isDisabled?: boolean;
}

export type Span = 'full' | 'half' | 'quarter';
export interface FormInput extends FormField {
    type: 'text' | 'date' | 'tel' | 'email' | 'time';
    value?: string;
    placeholder?: string;
    min?: string;
    max?: string;
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

export interface FormNumber extends FormField {
    type: "number",
    value?: number;
    defaultValue?: number;
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
    placeholder?: string;
    options: Option[];
}

export interface FormTextArea extends FormField {
    type: 'textarea';
    value?: string;
    maxLength?: {
        value: number;
        message?: string;
    };
    minLength?: {
        value: number;
        message?: string;
    };
    placeholder?: string;
}

export interface FormCheckBox extends FormField {
    type: 'checkbox';
    heading?: string;
    defaultChecked?: boolean;
    isChecked?: boolean;
}

export interface FormRadios extends FormField {
    type: 'radio';
    defaultValue: string;
    value?: string;
    radios: {
        label: string;
        value: string;
        isDisabled: boolean;
    }[];
}

export type InputTypes = 'text' | 'radio'  | 'tel' | 'number' | 'email' | 'date' | 'checkbox' | 'select' | 'textarea' | 'time'

export interface Option {
    label: string;
    value: string;
    selected?: boolean;
}

export type Fields = FormInput | FormRadios | FormCheckBox | FormTextArea | FormNumber | FormSelect
