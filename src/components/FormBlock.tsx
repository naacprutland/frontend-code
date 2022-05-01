import { 
    Box,
    Button,
    Text,
    Grid,
    GridItem,
    useToast
  } from "@chakra-ui/react"
import { useState } from "react";
import Container from "./Container"
import { useForm } from "react-hook-form";
import { Fieldset } from "../interface/form";
import DynamicFormField, { DynamicFormFieldProps } from "./DynamicFormField";
import { fetchApi } from '../lib/util';
import apiEndPoints from "../lib/strapiApi";


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
    action,
    sections=[]
  }:FormBlockProps) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const { 
        register, 
        reset, 
        handleSubmit, 
        setError, 
        formState: { errors, isSubmitting } } = useForm();
    const toast = useToast()

    async function onSubmit(values: {
        [key:string]: string
    }) {
        setIsDisabled(true)
        const isClosable = true
        try {
          await fetchApi(`${apiEndPoints.baseApiUrl}/${action}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "data": values
            })
          })
          toast({
            title: 'Submitted Successfully!',
            status: 'success',
            isClosable
          })
          const restFields = Object.keys(values)
            .reduce((acc, cur) => {
                acc[cur] = '';
                return acc
            }, {})
          reset(restFields)
        } catch(e) {
          const errors = e?.details?.errors
          if (errors) {
            errors.forEach(error => {
                setError(error.path[0], { 
                    type: 'manual', 
                    message: error.message })
            })
          }
          
          toast({
            title: 'Submission Error',
            description: e.error.name === "unknown" ? "Try again another time" : e.error.message,
            status: 'error',
            isClosable
          })
        }     
        setIsDisabled(false);
      } 

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

                        {fieldset.subText && <Text 
                            marginBottom="6"
                            fontWeight="semibold">{fieldset.subText}</Text>}

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
                                        isLoading={isSubmitting}
                                        isDisabled={isDisabled}
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