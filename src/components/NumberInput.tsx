import { 
    NumberInput as ChakraNumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormControl,
    FormLabel,
    FormErrorMessage 
} from '@chakra-ui/react'
import { FormNumber } from '../interface/form'
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export interface NumberInputProps extends FormNumber {
    errors: DeepMap<FieldValues, FieldError>;
    register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
}

const NumberInput = ({
    id,
    name,
    label,
    value,
    defaultValue,
    maxLength,
    minLength,
    isRequired,
    requiredMessage,
    errors={},
    register
}: NumberInputProps) => {
    
    return (
    <FormControl isInvalid={errors[name]}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <ChakraNumberInput size='md' bg="white" 
            value={value as number} 
            name={name}
            max={maxLength?.value} 
            min={minLength?.value}
            defaultValue={defaultValue}
            {
                ...(register ? register(name, {
                        required: isRequired ? requiredMessage : null
                    }): {})
            } >
            <NumberInputField />
            <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
            </NumberInputStepper>
        </ChakraNumberInput>
        {
            (errors[name] && errors[name].types) && Object.entries(
                errors[name].types).map(([type, message]) => (
                    <FormErrorMessage key={type}>{message}</FormErrorMessage>
                ))
        }
    </FormControl>
)}

export default NumberInput