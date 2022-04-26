import { 
    Checkbox,
    FormControl,
    Text,
    FormErrorMessage 
} from '@chakra-ui/react'
import { FormCheckBox } from '../interface/form'
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export interface CheckBoxProps extends FormCheckBox {
    id: string;
    errors: DeepMap<FieldValues, FieldError>;
    register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
}

const CheckBox = ({
    name,
    label,
    heading,
    defaultChecked,
    isRequired,
    isChecked,
    requiredMessage,
    errors={},
    register
}: CheckBoxProps) => {
    
    return (
    <FormControl isInvalid={errors[name]}>
        { heading && <Text fontWeight="semibold" marginBottom="8px">{heading}</Text> }
        <Checkbox 
            size='md'
            name={name}
            isChecked={isChecked}
            {
                ...(register ? register(name, {
                        required: isRequired ? requiredMessage : null,
                    }): {})
              }
            defaultChecked={defaultChecked}>
            {label}
        </Checkbox>
        {
            (errors[name] && errors[name].types) && Object.entries(
                errors[name].types).map(([type, message]) => (
                    <FormErrorMessage key={type}>{message}</FormErrorMessage>
                ))
        }
    </FormControl>
)}

export default CheckBox