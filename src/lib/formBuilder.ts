import { Field } from "../interface/apiBlocks";
import { FormCheckBox, FormInput, FormNumber, FormRadios, FormSelect, FormTextArea, Span } from "../interface/form";

const fieldBuilders = (type: string) => {
    switch (type) {
        case 'text':
        case 'tel':
        case 'date':
        case 'email':
        case 'time':
          return inputBuilder
        case 'select':
          return selectBuilder
        case 'number':
          return numberBuilder
        case 'radio':
            return radioBuilder
        case 'checkbox':
            return checkboxBuilder
        case 'textarea':
            return textAreaBuilder
        default :
          return () => null
      }
}

export function rowBuilder(fields: Field[]) {
    const rows = [];
    for (const field of fields) {
      const rowIndex = field.row - 1
      if (!rows[rowIndex]) {
        rows[rowIndex] = {
          fields: []
        }
      }
      rows[rowIndex].fields.push(
        fieldBuilders(field.type)(field)
      )
      
    }
  
    return rows;
}

export function selectBuilder({
    id,
    span,
    name,
    label,
    isRequired,
    requiredMessage,
    autocomplete,
    isDisabled,
    placeholder,
    selectOptions
}: Field):FormSelect {
    return {
        id: `${id}`,
        span: span as Span,
        type: 'select',
        name,
        label,
        isRequired,
        requiredMessage,
        autocomplete,
        isDisabled,
        placeholder,
        options: selectOptions
    }
}

export function inputBuilder({
    id,
    span,
    type,
    name,
    label,
    isRequired,
    requiredMessage,
    autocomplete,
    isDisabled,
    placeholder,
    pattern,
    maxLength,
    minLength
}: Field): FormInput {
    const patternObj =  pattern ? ({
        value: new RegExp(pattern.value),
        message: pattern.message
    }) : null
    return {
        id: `${id}`,
        span: span as Span,
        type: type as 'text' | 'date' | 'tel' | 'email',
        name,
        label,
        isRequired,
        requiredMessage,
        autocomplete,
        isDisabled,
        placeholder,
        pattern: patternObj,
        maxLength,
        minLength
    }
}

export function textAreaBuilder({
    id,
    span,
    name,
    defaultValue,
    label,
    isRequired,
    requiredMessage,
    autocomplete,
    isDisabled,
    placeholder,
    maxLength,
    minLength
}: Field): FormTextArea {
    return {
        id: `${id}`,
        span: span as Span,
        type: 'textarea',
        name,
        value: defaultValue,
        label,
        isRequired,
        requiredMessage,
        autocomplete,
        isDisabled,
        placeholder,
        maxLength,
        minLength
    }
}

export function radioBuilder({
    id,
    span,
    name,
    defaultValue,
    label,
    isRequired,
    requiredMessage,
    autocomplete,
    isDisabled,
    radios
}: Field):FormRadios {
    return {
        id: `${id}`,
        type: 'radio',
        span: span as Span,
        name,
        defaultValue,
        label,
        isRequired,
        requiredMessage,
        autocomplete,
        isDisabled,
        radios
    }
}

export function checkboxBuilder({
    id,
    span,
    name,
    label,
    isRequired,
    requiredMessage,
    autocomplete,
    isDisabled,
    checkbox
}: Field): FormCheckBox {
    return {
        id: `${id}`,
        type: 'checkbox',
        span: span as Span,
        name,
        label,
        isRequired,
        requiredMessage,
        autocomplete,
        isDisabled,
        ...checkbox
    }
}

export function numberBuilder({
    id,
    span,
    name,
    label,
    defaultValue='',
    isRequired,
    requiredMessage,
    autocomplete,
    isDisabled,
    maxLength,
    minLength
}: Field): FormNumber {
    const value = Number(defaultValue)
    return {
        id: `${id}`,
        type: 'number',
        span: span as Span,
        name,
        label,
        isRequired,
        defaultValue: isNaN(value) ? value : null,
        requiredMessage,
        autocomplete,
        isDisabled,
        maxLength,
        minLength
    }
}