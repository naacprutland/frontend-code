import { Field } from "../interface/apiBlocks";
import { FormInput, FormSelect, FormTextArea, Span } from "../interface/form";

const fieldBuilders = (type: string) => {
    switch (type) {
        case 'text':
        case 'tel':
        case 'date':
        case 'email':
          return inputBuilder
        case 'select':
          return selectBuilder
        case 'number':
          return null
        case 'radio':
            return null
        case 'checkbox':
            return null
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