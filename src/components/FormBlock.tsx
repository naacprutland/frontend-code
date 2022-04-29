import { 
    Box,
    Button,
    Grid,
    GridItem
  } from "@chakra-ui/react"
import Container from "./Container"
import { useForm } from "react-hook-form";
import { Fieldset } from "../interface/form";
import DynamicFormField, { DynamicFormFieldProps } from "./DynamicFormField";


export interface FormBlockProps {
    label: string;
    action: string;
    sections?: Fieldset[]
}

enum FieldColumn {
    full=4,
    half=2,
    quarter=1
}

const FormBlock = ({
    label,
    action,
    sections=[]
  }:FormBlockProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('label', label)
        console.log('action', action)
        console.log('Submit', data)
    };

    return (
        <Container as="section" className="grid">
            <Box as="form" 
                className="gcol-12 gcol-md-10 gcol-lg-8 center"
                onSubmit={handleSubmit(onSubmit)}>
                {sections.map((fieldset, i) => (
                    <Box key={fieldset.label + i} as="fieldset"
                        borderBottom={i !== sections.length -1 ? '1px solid' : null}
                        py={['32px', '48px', '56px']}>
                        <div>
                            <Box as="legend" fontSize={["32px", "36px", "48px"]}>
                                {fieldset.label}
                            </Box>
                        </div>

                        <Grid
                            templateColumns='repeat(4, 1fr)'
                            gap={[6, 6, "24px 32px"]}
                        >
                            {fieldset?.rows.map((row, rowIndex) => {
                                return row?.fields
                                    .slice(0, 4)
                                    .map((field) => {
                                        const fieldProps: DynamicFormFieldProps = {
                                            ...field,
                                        } as DynamicFormFieldProps
                                        
                                        return (
                                            <GridItem 
                                                key={rowIndex + field.name}
                                                rowStart={[null, rowIndex + 1]}
                                                colSpan={[4, FieldColumn[field.span]]} >
                                                <DynamicFormField 
                                                    {...fieldProps} 
                                                    register={register} 
                                                    errors={errors} />
                                            </GridItem>
                                        )
                                    }
                                )
                            })}
                            {(i === sections.length -1) && (
                                <GridItem  justifySelf={[null, "center"]} colSpan={4}>
                                    <Button type="submit"
                                        w="100%"
                                        colorScheme='teal' 
                                        variant='solid' 
                                        size="lg">
                                        Submit</Button>
                                </GridItem>
                            )}
                        </Grid>
                        
                    </Box>
                ) )}
            </Box>
        </Container>  
    )
  }

  export default FormBlock