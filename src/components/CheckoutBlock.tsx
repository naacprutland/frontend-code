import { Fieldset } from "../interface/form"
import FormBlock from "./FormBlock"
import TextBlock from "./TextBlock"
import DividerBlock from "./DividerBlock"

export interface CheckoutBlockProps {
    formData: Fieldset[]
    details: string;
}

const CheckoutBlock = ({
    formData,
    details
}: CheckoutBlockProps) => {
    return (
        <>
            {details && <TextBlock richText={details} />}
            <DividerBlock />
            <FormBlock action="callback" sections={formData} />
        </>
    )
}

export default CheckoutBlock