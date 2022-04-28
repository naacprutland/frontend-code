import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import type { InputProps } from './Input'
import type { SelectProps } from './Select'
import type { NumberInputProps } from './NumberInput'
import type { RadiosProps } from './Radios'
import type { CheckBoxProps } from './CheckBox'
import type { TextAreaProps } from './TextArea'

export type DynamicFormFieldProps  = InputProps | SelectProps | NumberInputProps | RadiosProps | TextAreaProps | CheckBoxProps

const DynamicInput: ComponentType<InputProps> = dynamic(() => import('./Input'))
const DynamicSelect: ComponentType<SelectProps> = dynamic(() => import('./Select'))
const DynamicNumberInput: ComponentType<NumberInputProps> = dynamic(() => import('./NumberInput'))
const DynamicRadios: ComponentType<RadiosProps> = dynamic(() => import('./Radios'))
const DynamicCheckBox: ComponentType<CheckBoxProps> = dynamic(() => import('./CheckBox'))
const DynamicTextArea: ComponentType<TextAreaProps> = dynamic(() => import('./TextArea'))

function DynamicFormField(props: DynamicFormFieldProps) {

  switch (props.type) {
    case 'text':
    case 'tel':
    case 'date':
    case 'email':
      return <DynamicInput {...props as InputProps} />
    case 'select':
      return <DynamicSelect {...props as SelectProps} />
    case 'number':
      return <DynamicNumberInput {...props as NumberInputProps} />
    case 'radio':
        return <DynamicRadios {...props as RadiosProps} />
    case 'checkbox':
        return <DynamicCheckBox  {...props as CheckBoxProps} />
    case 'textarea':
        return <DynamicTextArea {...props as TextAreaProps} />
    default :
      return null
  }

}

export default DynamicFormField