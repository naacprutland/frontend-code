// import { Box } from "@chakra-ui/react"
import { Fieldset } from "../interface/form"
import FormBlock from "./FormBlock"
import DividerBlock from "./DividerBlock"
import ContentText from "./ContentText"
import Container from "./Container"
import OptionsTypeSelector from "./OptionTypeSelector"
import { FullOption } from "../interface/checkout"
import { OptionsData } from "../interface/general"

export interface CheckoutBlockProps {
    formData: Fieldset[]
    details?: string;
    checkoutOptions: FullOption[];
    optionData: OptionsData;
}

const CheckoutBlock = ({
    formData,
    details,
    checkoutOptions,
    optionData
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
                optionData={optionData}
                checkoutOptions={checkoutOptions} />
            <DividerBlock contained />
            <Container className="grid">
                {details && <ContentText className="gcol-12 gcol-md-10 gcol-lg-8 center" richText={details} />}
            </Container>
            <DividerBlock contained />
            <FormBlock action="callback" sections={formData} />
        </>
    )
}

export default CheckoutBlock