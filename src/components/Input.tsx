import { 
    Input as ChakraInput,
    FormControl,
    FormLabel,
    FormErrorMessage 
} from '@chakra-ui/react'
import { FormInput } from '../interface/form'
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export interface InputProps extends FormInput {
    id: string;
    errors: DeepMap<FieldValues, FieldError>;
    register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
}

const Input = ({
    id,
    name,
    type,
    label,
    placeholder,
    value,
    pattern,
    maxLength,
    minLength,
    isRequired,
    requiredMessage,
    errors={},
    register
}: InputProps) => {
    
    return (
    <FormControl isInvalid={errors[name]}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <ChakraInput id={id} name={name}
            size='md'
            bg="white"
            type={type}
            value={value as string | number}
            placeholder={placeholder}
            {
                ...(register ? register(name, {
                        required: isRequired ? requiredMessage : null,
                        pattern,
                        minLength,
                        maxLength
                    }): {})
              } />
        {
            (errors[name] && errors[name].types) && Object.entries(
                errors[name].types).map(([type, message]) => (
                    <FormErrorMessage key={type}>{message}</FormErrorMessage>
                ))
        }
    </FormControl>
)}

export default Input