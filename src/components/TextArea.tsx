import { 
    Textarea as ChakraTextArea,
    FormControl,
    FormLabel,
    FormErrorMessage 
} from '@chakra-ui/react'
import { FormTextArea } from '../interface/form'
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export interface TextAreaProps extends FormTextArea {
    errors: DeepMap<FieldValues, FieldError>;
    register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
}

const TextArea = ({
    id,
    name,
    label,
    value,
    placeholder,
    isRequired,
    requiredMessage,
    errors={},
    maxLength,
    minLength,
    register
}: TextAreaProps) => {
    
    return (
    <FormControl isInvalid={errors[name]}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <ChakraTextArea 
            id={id}
            size='md'
            bg="white"
            name={name}
            value={value}
            placeholder={placeholder}
            {
                ...(register ? register(name, {
                        required: isRequired ? requiredMessage : null,
                        maxLength,
                        minLength,
                    }): {})
              }
            />
        {
            (errors[name] && errors[name].types) && Object.entries(
                errors[name].types).map(([type, message]) => (
                    <FormErrorMessage key={type}>{message}</FormErrorMessage>
                ))
        }
    </FormControl>
)}

export default TextArea