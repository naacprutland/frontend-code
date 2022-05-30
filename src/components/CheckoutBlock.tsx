import { useState, useRef } from 'react'
import { Fieldset } from "../interface/form"
import FormBlock, { RespForm, FormDataStructure } from "./FormBlock"
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
    const [subscription, setSubscription] = useState<object>()
    const [userData, setUserData] = useState<FormDataStructure>(null)
    const [isUserValid, setIsUserValid] = useState<boolean>(false)
    const [isSubValid, setIsSubValid] = useState<boolean>(false)

    const onTypeUpdate = (opt: UpdateResult) => {
        if (opt?.values?.type) {
            // eslint-disable-next-line no-console
            // console.log(opt.values);
            setIsSubValid(opt.isValid)
            if (opt.values.type === 'renew') {
                // handle renew
            } else {
                // handle none new
                console.log(membershipOptions[opt.values.type])
                setSubscription(opt.values)
            }
            // update the type here
        }
    }

    const onFormData = (opt: RespForm) => {
        if (opt?.data) {
            // eslint-disable-next-line no-console
            console.log(opt)
            setIsUserValid(opt?.isValid)
            setUserData(opt?.data)
        }
        return true;
    }

    const onSubmit = () => {
        if (!isSubValid) {
            // trigger valid
            if (optionTypeRef?.current) {
                (optionTypeRef.current as { trigger: Trigger }).trigger('', { shouldFocus: true })
            }
            return
        }

        if (!isUserValid) {
            // trigger valid
            if (formBlockRef?.current) {
                (formBlockRef.current as { trigger: Trigger }).trigger('', { shouldFocus: true })
            }
            return;
        }
        // send data on submit with paypal confirmation
        console.log(subscription)
        console.log(userData)
    }
    return (
        <>
            <OptionsTypeSelector
                ref={optionTypeRef}
                checkoutOptions={checkoutOptions}
                onUpdate={onTypeUpdate}
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
                onCallBack={onFormData}
                hideSubmitBtn
                sections={formData} />

            <button onClick={onSubmit}>CLick me</button>
        </>
    )
}

export default CheckoutBlock