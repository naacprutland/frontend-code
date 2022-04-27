import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import type { InputProps } from './Input'
import type { SelectProps } from './Select'
import type { NumberInputProps } from './NumberInput'
import type { RadiosProps } from './Radios'

export type DynamicFormFieldProps  = InputProps | SelectProps | NumberInputProps | RadiosProps

const DynamicInput: ComponentType<InputProps> = dynamic(() => import('./Input'))
const DynamicSelect: ComponentType<SelectProps> = dynamic(() => import('./Select'))

function DynamicFormField(props: DynamicFormFieldProps) {

  switch (props.type) {
    case 'text':
    case 'tel':
    case 'date':
    case 'email':
      return <DynamicInput {...props as InputProps} />
    case 'select':
      return <DynamicSelect {...props as SelectProps} />
    default :
      return null
  }

}

export default DynamicFormField