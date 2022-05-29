// import { Box } from "@chakra-ui/react"
import { Fieldset } from "../interface/form"
import FormBlock from "./FormBlock"
import DividerBlock from "./DividerBlock"
import ContentText from "./ContentText"
import Container from "./Container"
import OptionsTypeSelector from "./OptionTypeSelector"
import { FullOption } from "../interface/checkout"

export interface CheckoutBlockProps {
    formData: Fieldset[]
    details?: string;
    checkoutOptions: FullOption[];
}


const CheckoutBlock = ({
    formData,
    details,
    checkoutOptions
}: CheckoutBlockProps) => {
    const onTypeUpdate = (opt) => {
        // eslint-disable-next-line no-console
        console.log(opt);
        // update the type here
    }
    return (
        <>
            <OptionsTypeSelector
                onUpdate={onTypeUpdate}
                checkoutOptions={checkoutOptions} />
            <Container>
                <DividerBlock />
                {details && <ContentText richText={details} />}
                <DividerBlock />
            </Container>
            <FormBlock action="callback" sections={formData} />
        </>
    )
}

export default CheckoutBlock