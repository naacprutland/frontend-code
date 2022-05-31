import { useState, useRef } from 'react'
import { Fieldset } from "../interface/form"
import FormBlock, { RespForm } from "./FormBlock"
import DividerBlock from "./DividerBlock"
import ContentText from "./ContentText"
import Container from "./Container"
import OptionsTypeSelector from "./OptionTypeSelector"
import { FullOption, MemberOptions } from "../interface/checkout"
import { OptionsData, UpdateResult } from "../interface/general"

export interface CheckoutBlockProps {
    formData: Fieldset[]
    details?: string;
    checkoutOptions: FullOption[];
    optionData: OptionsData;
    membershipOptions: MemberOptions[];
}

type Trigger = (name: string, obj: { shouldFocus: boolean; }) => void

const CheckoutBlock = ({
    formData,
    details,
    checkoutOptions,
    optionData,
    membershipOptions
}: CheckoutBlockProps) => {
    const formBlockRef = useRef()
    const optionTypeRef = useRef()
    const [optionTypeState, setOptionTypeState] = useState<UpdateResult>(null)
    const [userDataState, setUserDataState] = useState<RespForm>(null)

    const onSubmit = () => {
        // if not valid then run on option type
        if (!optionTypeState?.isValid) {
            if (optionTypeRef?.current) {
                (optionTypeRef.current as { trigger: Trigger }).trigger('', { shouldFocus: true })
            }
            return
        }
        // if user data is not valid trigger validation
        if (!userDataState?.isValid) {
            if (formBlockRef?.current) {
                (formBlockRef.current as { trigger: Trigger }).trigger('', { shouldFocus: true })
            }
            return;
        }
        // send data on submit with paypal confirmation
        // eslint-disable-next-line no-console
        console.log(optionTypeState?.values)
        // eslint-disable-next-line no-console
        console.log(userDataState?.data)
    }

    return (
        <>
            <OptionsTypeSelector
                ref={optionTypeRef}
                checkoutOptions={checkoutOptions}
                onUpdate={setOptionTypeState}
                optionData={optionData}
                membershipOptions={membershipOptions}
            />
            <DividerBlock contained />
            <Container className="grid" py={['32px', '48px', '56px']}>
                {details && <ContentText className="gcol-12 gcol-md-10 gcol-lg-8 center" richText={details} />}
            </Container>
            <DividerBlock contained />
            <FormBlock
                ref={formBlockRef}
                action="callback"
                onCallBack={setUserDataState}
                hideSubmitBtn
                sections={formData} />

            <button onClick={onSubmit}>CLick me</button>
        </>
    )
}

export default CheckoutBlock