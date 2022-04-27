import { 
    Radio,
    RadioGroup,
    FormControl,
    Text,
    FormErrorMessage,
    Stack
} from '@chakra-ui/react'
import { FormRadios } from '../interface/form'

export interface RadiosProps extends FormRadios {
    errors: {
        [x: string]: any;
    };
    register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
}

const Radios = ({
    id,
    name,
    value,
    label,
    defaultValue,
    isRequired,
    requiredMessage,
    isDisabled,
    radios=[],
    errors={},
    register
}: RadiosProps) => {
    
    return (
    <FormControl isInvalid={errors[name]}>
        { label && <Text fontWeight="semibold" marginBottom="2">{label}</Text> }
        <RadioGroup id={id} name={name} value={value} defaultValue={defaultValue}
            {
                ...(register ? register(name, {
                        required: isRequired ? requiredMessage : null,
                    }): {})
              }
            >
            <Stack spacing='6'>
                {radios.map(v => (
                    <Radio key={v.value}
                        background="white"
                        value={v.value}
                        size='md'
                        isDisabled={isDisabled || v.isDisabled}>
                        {v.label}
                    </Radio>
                ))}
            </Stack>
        </RadioGroup>
        {
            (errors[name] && errors[name].types) && Object.entries(
                errors[name].types).map(([type, message]) => (
                    <FormErrorMessage key={type}>{message}</FormErrorMessage>
                ))
        }
    </FormControl>
)}

export default Radios