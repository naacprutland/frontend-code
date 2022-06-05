import { useEffect, useState, useRef } from 'react'
import { Fieldset } from "../interface/form"
import FormBlock, { RespForm } from "./FormBlock"
import DividerBlock from "./DividerBlock"
import ContentText from "./ContentText"
import Container from "./Container"
import OptionsTypeSelector from "./OptionTypeSelector"
import { FullOption, MemberOptions } from "../interface/checkout"
import { OptionsData, PurchaseItem, UpdateResult } from "../interface/general"
import BuyBox from './BuyBox'
import { OnApproveData } from "@paypal/paypal-js/types/components/buttons"

export interface CheckoutBlockProps {
    additionalFees?: PurchaseItem[];
    formData: Fieldset[]
    details?: string;
    checkoutOptions: FullOption[];
    optionData: OptionsData;
    fundingStyling?: string[];
    membershipOptions: MemberOptions[];
    payPalClientID: string;
    payPalClientBrandName?: string;
}

type Trigger = (name: string, obj: { shouldFocus: boolean; }) => Promise<boolean>

const CheckoutBlock = ({
    additionalFees = [],
    formData,
    details,
    checkoutOptions,
    optionData,
    membershipOptions,
    fundingStyling,
    payPalClientID,
    payPalClientBrandName
}: CheckoutBlockProps) => {
    const formBlockRef = useRef()
    const optionTypeRef = useRef()
    const [optionTypeState, setOptionTypeState] = useState<UpdateResult>(null)
    const [userDataState, setUserDataState] = useState<RespForm>(null)
    const [selectedItem, setSelectedItem] = useState<MemberOptions>(null)

    useEffect(() => {
        if (optionTypeState) {
            let item: MemberOptions;
            if (optionTypeState.values.type === 'renew') {
                item = membershipOptions.find(
                    (v) => v.slug === optionTypeState.values.membershipType
                )
            } else {
                item = membershipOptions.find(
                    (v) => v.slug === optionTypeState.values.type
                )
            }

            setSelectedItem(item)
        }
    }, [optionTypeState])

    const onDisableClick = async (optionState, userState) => {
        let showSecondFocus = false;
        // if not valid then run on option type
        if (!optionState?.isValid) {
            if (optionTypeRef?.current) {
                showSecondFocus = await (optionTypeRef.current as { trigger: Trigger }).trigger('', { shouldFocus: true })
            }
        }
        // if user data is not valid trigger validation
        if (!userState?.isValid) {
            if (formBlockRef?.current) {
                await (formBlockRef.current as { trigger: Trigger }).trigger('', { shouldFocus: showSecondFocus })
            }
        }
    }

    const onSubmit = (data: OnApproveData) => {
        // eslint-disable-next-line no-console
        console.log(data)
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
            <BuyBox
                additionalFees={additionalFees}
                brandName={payPalClientBrandName}
                clientId={payPalClientID}
                disableBtn={!(optionTypeState?.isValid && userDataState?.isValid)}
                fundingStyling={fundingStyling}
                optionType={optionTypeState}
                onDisableClick={() => onDisableClick(optionTypeState, userDataState)}
                onSubmit={onSubmit}
                selectedItem={selectedItem}
            />
        </>
    )
}

export default CheckoutBlock