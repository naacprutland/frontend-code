import { useEffect, useState, useMemo, forwardRef, useImperativeHandle } from "react";
import { Box, Text } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import Container from "./Container";
import Select from "./Select";
import Radios from "./Radios"
import { FullOption, LifeOption, MemberOptions } from "../interface/checkout";
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
    membershipType?: string;
    membershipId?: string;
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
        setValue,
        watch,
        trigger,
        resetField,
        formState: {
            errors,
            isValid
        }
    } = useForm({
        mode: 'onChange',
        shouldUnregister: true,
        defaultValues: useMemo((): FormValues => {
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

        if (values?.type === 'renew') {
            if (values?.membershipType) {
                const choice: MemberOptions = membershipOptions.find(v => {
                    return v.slug === values?.membershipType
                })
                if (choice) {
                    setLabel(choice.title)
                    return setAmount(`$${choice.price}`)
                }
            }
        } else {
            const choice: MemberOptions = membershipOptions.find(v => {
                return v.slug === values.type
            })

            if (choice) {
                setLabel(choice.title)
                if (choice.paymentOptions) {
                    const paySelection = ('paymentType' in values) ? choice.paymentOptions.find(v => {
                        return v.slug === values.paymentType
                    }) : choice.paymentOptions[0];
                    console.log({ paySelection })
                    if (!paySelection) return setAmount(null)
                    return setAmount(`$${paySelection?.price}`)
                } else {
                    return setAmount(`$${choice.price}`)
                }
            }
        }

        setAmount(null)
        setLabel(null)
    }

    useEffect(() => {
        if (checkoutOptions) {
            const option = checkoutOptions.find(v => v.value == watchShowType) || null
            if ((option as LifeOption)?.paymentType) {
                setValue('paymentType', (option as LifeOption).paymentType[0].value || '')
            }
            setCurrentOpt(option)
        }

    }, [watchShowType, checkoutOptions])

    useEffect(() => {
        if (currentOpt) {
            if ((currentOpt as LifeOption)?.paymentType) {
                setValue('paymentType', (currentOpt as LifeOption).paymentType[0].value || '')
            }
        } else {
            resetField('paymentType');
        }
        resetField('paymentType');
    }, [currentOpt])

    useEffect(() => {
        if (onUpdate) {
            const outSideValues = getValues()
            onUpdate({ isValid, values: outSideValues })
            handleUpdate(outSideValues)
            const subscription = watch((values: FormValues) => {
                onUpdate({ isValid, values })
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
                                    isRequired={false}
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
                                defaultValue={currentOpt?.paymentType[0]?.value}
                                errors={errors}
                                register={register}
                                radios={currentOpt?.paymentType}
                                isRequired={true}
                                requiredMessage={optionData?.paymentType?.requiredMessage}
                                direction="row"
                            />
                        </Box>
                    )}
                {label && (
                    <Text flex="1 1 100%" fontSize='18px' fontWeight="600">
                        {label}: {amount}
                    </Text>)}
            </Box>
        </Container>
    )
})

export default OptionsTypeSelector