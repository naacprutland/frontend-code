import { Fieldset } from "../interface/form"
import FormBlock from "./FormBlock"
import DividerBlock from "./DividerBlock"
import ContentText from "./ContentText"

export interface CheckoutBlockProps {
    formData: Fieldset[]
    details?: string;
}

const CheckoutBlock = ({
    formData,
    details
}: CheckoutBlockProps) => {
    return (
        <>
            {details && <ContentText richText={details} />}
            <DividerBlock />
            <FormBlock action="callback" sections={formData} />
        </>
    )
}

export default CheckoutBlock