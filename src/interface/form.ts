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
    fields: (Input | Select | TextArea)[];
}

export interface FormField {
    id: string;
    type: InputTypes;
    name: string;
    label: string;
    isRequired?: boolean;
    autocomplete?: boolean;
    disabled?: boolean;
}

export interface Input extends FormField {
    value?: string | number | boolean;
    placeholder?: string;
    pattern?: RegExp;
    maxLength?: number;
    minLength?: number;
}

export interface Select extends FormField {
    type: 'select';
    options: Option[];
}

export interface TextArea extends FormField {
    type: 'textarea';
    value?: string;
    rows?: number;
    cols?: number;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
}

export type InputTypes = 'text' | 'radio'  | 'tel' | 'number' | 'email' | 'date' | 'checkbox' | 'select' | 'textarea'

export interface Option {
    value: string;
    selected: boolean;
}

