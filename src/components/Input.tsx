import {
    Input as ChakraInput,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Text
} from '@chakra-ui/react'
import { FormInput } from '../interface/form'
export interface InputProps extends FormInput {
    subText?: string;
    errors?: {
        [x: string]: any;
    };
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
    min,
    max,
    maxLength,
    minLength,
    isRequired,
    requiredMessage,
    subText,
    errors = {},
    register
}: InputProps) => {

    return (
        <FormControl isInvalid={errors[name]}>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <ChakraInput id={id} name={name}
                size='md'
                bg="white"
                type={type}
                min={min}
                max={max}
                value={value as string | number}
                placeholder={placeholder}
                {
                ...(register ? register(name, {
                    required: isRequired ? requiredMessage : null,
                    pattern,
                    minLength,
                    maxLength
                }) : {})
                } />
            {
                subText && <Text
                    marginTop="8px"
                    color="#718096"
                    fontSize={'14px'}>{subText}</Text>
            }
            {
                (errors[name]) && (
                    <FormErrorMessage>{errors[name].message}</FormErrorMessage>
                )
            }
        </FormControl>
    )
}

export default Input