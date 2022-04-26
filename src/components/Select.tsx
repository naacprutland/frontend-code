import { 
    Select as ChakraSelect,
    FormControl,
    FormLabel,
    FormErrorMessage 
} from '@chakra-ui/react'
import { FormSelect } from '../interface/form'
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export interface SelectProps extends FormSelect {
    id: string;
    errors: DeepMap<FieldValues, FieldError>;
    register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
}

const Select = ({
    id,
    name,
    label,
    placeholder,
    isRequired,
    requiredMessage,
    errors={},
    options=[],
    register
}: SelectProps) => {
    
    return (
    <FormControl isInvalid={errors[name]}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <ChakraSelect size='md'
            bg="white"
            {
                ...(register ? register(name, {
                        required: isRequired ? requiredMessage : null
                    }): {})
              }
            placeholder={placeholder}>
            {
                options.map(v => (
                    <option key={v.value} value={v.value}
                        selected={v.selected}
                        >
                        {v.label}
                    </option>
                ))
            }
        </ChakraSelect>
        {
            (errors[name] && errors[name].types) && Object.entries(
                errors[name].types).map(([type, message]) => (
                    <FormErrorMessage key={type}>{message}</FormErrorMessage>
                ))
        }
    </FormControl>
)}

export default Select