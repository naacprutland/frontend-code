import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import type { InputProps } from './Input'
import type { SelectProps } from './Select'
import type { NumberInputProps } from './NumberInput'
import type { RadiosProps } from './Radios'

export type DynamicFormFieldProps  = InputProps | SelectProps | NumberInputProps | RadiosProps

const DynamicInput: ComponentType<InputProps> = dynamic(() => import('./Input'))


function DynamicFormField(props: DynamicFormFieldProps) {

  switch (props.type) {
    case 'text':
    case 'tel':
    case 'date':
    case 'email':
      return <DynamicInput {...props as InputProps} />
    
    default :
      return null
  }

}

export default DynamicFormField