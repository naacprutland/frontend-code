import { 
    Select as ChakraSelect,
    FormControl,
    FormLabel,
    FormErrorMessage 
} from '@chakra-ui/react'
import { FormSelect } from '../interface/form'

export interface SelectProps extends FormSelect {
    errors: {
        [x: string]: any;
    };
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
            id={id}
            bg="white"
            name={name}
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
            (errors[name]) && (
                    <FormErrorMessage>{errors[name].message}</FormErrorMessage>
                )
        }
    </FormControl>
)}

export default Select