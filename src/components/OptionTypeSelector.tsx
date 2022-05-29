import { useEffect, useState, useMemo } from "react";
import { Box } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import Container from "./Container";
import Select from "./Select";
import Radios from "./Radios"
import { FullOption } from "../interface/checkout";
import Input from "./Input";
import { OptionsData, UpdateResult } from "../interface/general";
export interface OptionsTypeSelectorProps {
    optionData: OptionsData;
    checkoutOptions: FullOption[];
    onUpdate: (arg: UpdateResult) => void;
}

const OptionsTypeSelector = ({
    optionData,
    checkoutOptions,
    onUpdate
}: OptionsTypeSelectorProps) => {
    const router = useRouter()
    const {
        register,
        getValues,
        watch,
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
                type = query?.type
            }

            return {
                type
            };
        }, [router])
    });
    const [currentOpt, setCurrentOpt] = useState<FullOption>(null)
    const watchShowType = watch("type", '');

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
                    currentOpt?.type === 'life' && (
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
            </Box>
        </Container>
    )
}

export default OptionsTypeSelector