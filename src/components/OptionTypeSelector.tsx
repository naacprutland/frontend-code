import { useEffect, useState, useMemo, forwardRef, useImperativeHandle } from "react";
import { Box, Text } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import Container from "./Container";
import Select from "./Select";
import Radios from "./Radios"
import { FullOption, MemberOptions } from "../interface/checkout";
import Input from "./Input";
import { OptionsData, UpdateResult } from "../interface/general";
export interface OptionsTypeSelectorProps {
    optionData: OptionsData;
    checkoutOptions: FullOption[];
    membershipOptions: MemberOptions[];
    onUpdate: (arg: UpdateResult) => void;
}

export interface FormValues {
    type?: string;
    paymentType?: string;
}

const OptionsTypeSelector = forwardRef(({
    optionData,
    checkoutOptions,
    membershipOptions,
    onUpdate
}: OptionsTypeSelectorProps, ref) => {
    const router = useRouter()
    const {
        register,
        getValues,
        watch,
        trigger,
        formState: {
            errors,
            isValid
        }
    } = useForm({
        mode: 'onChange',
        defaultValues: useMemo(() => {
            const query = router?.query;
            let type = '';

            if (typeof query.type === 'string') {
                const findOption = checkoutOptions.find(v => v.value === query.type)
                // if option is in available values
                if (findOption) type = query?.type
            }

            return {
                type
            };
        }, [router])
    });
    const [currentOpt, setCurrentOpt] = useState<FullOption>(null)
    const [label, setLabel] = useState(null)
    const [amount, setAmount] = useState(null)
    const watchShowType = watch("type", '');

    const handleUpdate = (values: FormValues) => {
        setAmount(null)

        const choice: MemberOptions = membershipOptions.find(v => {
            return v.slug === values.type
        })
        console.log('update', values, getValues())
        if (choice) {
            setLabel(choice.title)
            if (choice.paymentOptions && 'paymentType' in values) {
                const choice1: MemberOptions = membershipOptions.find(v => {
                    return v.slug === values.type
                })
                if (choice1) {
                    const paySelection = choice1.paymentOptions.find(v => {
                        return v.slug === values.paymentType
                    })
                    console.log({ paySelection })

                    if (!paySelection) return
                    setAmount(`$${paySelection?.price}`)
                }
            } else {
                setAmount(`$${choice.price}`)
            }
        }


        // if (values.type === 'renew') {

        // }
    }

    useEffect(() => {
        if (checkoutOptions) {
            const option = checkoutOptions.find(v => v.value == watchShowType) || null
            setCurrentOpt(option)
        }

    }, [watchShowType, checkoutOptions])

    useEffect(() => {
        if (onUpdate) {
            const values = getValues()
            onUpdate({ isValid, values })
            console.log('out subscribe')
            handleUpdate(values)
            const subscription = watch((values: FormValues) => {
                onUpdate({ isValid, values })
                console.log('subscribe')
                handleUpdate(values)

            });
            return () => subscription.unsubscribe();
        }
    }, [watch, isValid, membershipOptions])

    useImperativeHandle(ref, () => ({
        trigger
    }))

    return (
        <Container className="grid" py={['32px', '48px', '56px']}>
            <Box as="form"
                display="flex"
                flexWrap="wrap"
                gap="24px"
                className="gcol-12 gcol-md-10 gcol-lg-8 center">
                <Box flex={['1 1 100%', '1 1 48%']}>
                    <Select
                        id={'type1'}
                        type="select"
                        errors={errors}
                        label={optionData?.checkoutType?.label}
                        name="type"
                        placeholder={optionData?.checkoutType?.placeholder}
                        register={register}
                        isRequired={true}
                        requiredMessage={optionData?.checkoutType?.requiredMessage}
                        options={checkoutOptions}
                    />
                </Box>
                {
                    currentOpt?.type === 'renew' && (
                        <>
                            <Box flex={['1 1 100%', '1 1 48%']}>
                                <Select
                                    id={'renew1'}
                                    type="select"
                                    errors={errors}
                                    label={optionData?.membershipType?.label}
                                    name="membershipType"
                                    placeholder={optionData?.membershipType?.placeholder}
                                    register={register}
                                    isRequired={true}
                                    requiredMessage={optionData?.membershipType?.requiredMessage}
                                    options={currentOpt?.membershipType}
                                />
                            </Box>
                            <Box flex={['1 1 100%', '1 1 48%']}>
                                <Input
                                    id={'renew2'}
                                    type="text"
                                    errors={errors}
                                    label={optionData?.membershipId?.label}
                                    name="membershipId"
                                    placeholder={optionData?.membershipId?.placeholder}
                                    register={register}
                                    isRequired={true}
                                    subText={optionData?.membershipId?.subText}
                                    requiredMessage={optionData?.membershipId?.requireMessage} />
                            </Box>
                        </>
                    )
                }
                {
                    (currentOpt && 'paymentType' in currentOpt) && (
                        <Box flex={['1 1 100%', '1 1 48%']}>
                            <Radios
                                id="paymentTypes"
                                name="paymentType"
                                type="radio"
                                label={optionData?.paymentType?.label}
                                defaultValue={currentOpt.paymentType[0]?.value}
                                errors={errors}
                                register={register}
                                radios={currentOpt.paymentType}
                                isRequired={true}
                                requiredMessage={optionData?.paymentType?.requiredMessage}
                                direction="row"
                            />
                        </Box>
                    )}
                {label && (
                    <Text flex="1 1 100%">
                        {label}: {amount}
                    </Text>)}
            </Box>
        </Container>
    )
})

export default OptionsTypeSelector