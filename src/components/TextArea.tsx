import {
    Textarea as ChakraTextArea,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/react'
import { FormTextArea } from '../interface/form'

export interface TextAreaProps extends FormTextArea {
    errors: {
        [x: string]: any;
    };
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
    errors = {},
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
                minHeight="120px"
                placeholder={placeholder}
                {
                ...(register ? register(name, {
                    required: isRequired ? requiredMessage : null,
                    maxLength,
                    minLength,
                }) : {})
                }
            />
            {
                (errors[name]) && (
                    <FormErrorMessage>{errors[name].message}</FormErrorMessage>
                )
            }
        </FormControl>
    )
}

export default TextArea