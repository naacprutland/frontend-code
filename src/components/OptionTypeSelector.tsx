import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import Container from "./Container";
import Select from "./Select";
import Radios from "./Radios"
import { FullOption } from "../interface/checkout";
import Input from "./Input";

export interface UpdateResult {
    isValid: boolean;
    values: {
        [x: string]: any;
    }
}

export interface OptionsTypeSelectorProps {
    checkoutOptions: FullOption[];
    onUpdate: (arg: UpdateResult) => void;
}

const OptionsTypeSelector = ({
    checkoutOptions,
    onUpdate
}: OptionsTypeSelectorProps) => {
    const {
        register,
        getValues,
        watch,
        formState: {
            errors,
            isValid
        }
    } = useForm({ mode: 'onChange' });
    const [currentOpt, setCurrentOpt] = useState<FullOption>(null)
    const watchShowType = watch("type", false);

    useEffect(() => {
        if (checkoutOptions) {
            const option = checkoutOptions.find(v => v.value == watchShowType) || null
            setCurrentOpt(option)
        }
    }, [watchShowType, checkoutOptions])

    useEffect(() => {
        if (onUpdate) {
            onUpdate({ isValid, values: getValues() })
            const subscription = watch((values) => {
                onUpdate({ isValid, values })
            });
            return () => subscription.unsubscribe();
        }
    }, [watch, isValid, onUpdate])

    return (
        <Container className="grid">
            <Box as="form"
                className="gcol-12 gcol-md-10 gcol-lg-8 center">
                <Select
                    id={'type1'}
                    type="select"
                    errors={errors}
                    label="Checkout Type"
                    name="type"
                    placeholder="Select an option type"
                    register={register}
                    isRequired={true}
                    requiredMessage="Please select a type"
                    options={checkoutOptions}
                />
                {currentOpt?.type === 'renew'}
                {
                    currentOpt?.type === 'renew' && (
                        <>
                            <Select
                                id={'renew1'}
                                type="select"
                                errors={errors}
                                label="Membership Type"
                                name="membershipType"
                                placeholder="Select an membership type"
                                register={register}
                                isRequired={true}
                                requiredMessage="Please select a membership type"
                                options={currentOpt?.membershipType}
                            />
                            <Input
                                id={'renew2'}
                                type="text"
                                errors={errors}
                                label="Membership Type"
                                name="membershipId"
                                placeholder="Select an membership type"
                                register={register}
                                isRequired={true}
                                subText="Add member number if known"
                                requiredMessage="Please select a membership type" />
                        </>
                    )
                }
                {
                    currentOpt?.type === 'life' && (
                        <Radios
                            id="paymentTypes"
                            name="paymentType"
                            type="radio"
                            label="Payment Type"
                            defaultValue={currentOpt.paymentType[0]?.value}
                            errors={errors}
                            register={register}
                            radios={currentOpt.paymentType}
                            isRequired={true}
                            requiredMessage="Please select a payment type"
                        />)}
            </Box>
        </Container>
    )
}

export default OptionsTypeSelector