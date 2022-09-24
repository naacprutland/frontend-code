import {
    Input as ChakraInput,
    InputGroup,
    InputLeftElement,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/react'
import { FormNumber } from '../interface/form'

export interface NumberInputProps extends FormNumber {
    showMoneyIcon?: boolean;
    isDisabled?: boolean;
    placeholder?: string;
    errors: {
        [x: string]: any;
    };
    register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
}

// interface Register {
//     onChange: (event) => void
//     ref: (elm) => void
//     onBlur: () => void
// }
// type ElmRef = null | HTMLInputElement;

const NumberInput = ({
    id,
    name,
    label,
    value,
    showMoneyIcon,
    defaultValue,
    maxLength,
    minLength,
    isRequired,
    placeholder,
    requiredMessage,
    isDisabled,
    errors = {},
    register
}: NumberInputProps) => {

    return (
        <FormControl isInvalid={errors[name]} >
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <InputGroup>
                {showMoneyIcon && <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                >$</InputLeftElement>}
                <ChakraInput id={id} name={name}
                    size='md'
                    bg="white"
                    type='number'
                    placeholder={placeholder}
                    min={minLength?.value}
                    max={maxLength?.value}
                    value={value as string | number}
                    defaultValue={defaultValue}
                    disabled={isDisabled}
                    {
                    ...(register ? register(name, {
                        required: isRequired ? requiredMessage : null,
                        minLength,
                        maxLength
                    }) : {})
                    } />
            </InputGroup>
            {
                (errors[name]) && (
                    <FormErrorMessage>{errors[name].message}</FormErrorMessage>
                )
            }
        </FormControl >
    )
}

export default NumberInput