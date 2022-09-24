import { useEffect, useState, useCallback } from 'react';
import {
    Box,
    Heading,
    VStack,
    Stack,
    useToast,
    Image
} from '@chakra-ui/react'
import Container from './Container'
import NumberInput from './NumberInput';
import { Image as ImageApi } from '../interface/generalApi'
import { PurchaseUnit } from "@paypal/paypal-js/types/apis/orders"
import { useForm } from "react-hook-form"
import PayPal from './PayPal'
import { useRouter } from "next/router"
import useDonateStore from '../store/useDonateStore'

export interface PaypalDonateBlockProps {
    brandName: string
    heading: string
    position?: number
    image: {
        src: ImageApi
        alt: string
    }
    defaultDonationAmount?: number
    clientId: string
    fundingStyling?: string[];
}

const PaypalDonate = ({
    brandName,
    heading,
    position,
    image,
    defaultDonationAmount = 0,
    fundingStyling = [undefined],
    clientId
}: PaypalDonateBlockProps) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const [units, setUnits] = useState<PurchaseUnit[]>([])
    const {
        register,
        watch,
        formState: { errors } } = useForm(
            { mode: 'onChange' }
        );
    const toast = useToast()
    const router = useRouter()
    const donateState = useDonateStore()

    const onDisableClick = useCallback(() => {
        // eslint-disable-next-line no-console
        console.log('on disabled click')
    }, []);

    const onSubmit = useCallback(() => {
        setIsDisabled(true)
        donateState.isComplete()
        router.push("/donation-confirmation")
    }, [])

    const onError = useCallback((err: Record<string, unknown>) => {
        // eslint-disable-next-line no-console
        console.log(err)
        toast({
            title: 'Payment error',
            description: 'There was an issue submitting your payment',
            status: 'error',
            isClosable: true,
        })
    }, [])

    useEffect(() => {
        const subscription = watch((value) => {
            const fullUnits: PurchaseUnit[] = [
                {
                    amount: {
                        currency_code: 'USD',
                        value: parseFloat(`${value.amount}`).toFixed(2),
                        breakdown: {
                            item_total: {
                                currency_code: 'USD',
                                value: parseFloat(`${value.amount}`).toFixed(2)
                            }
                        }
                    },
                    items: [
                        {
                            name: 'donation',
                            quantity: '1',
                            unit_amount: {
                                currency_code: 'USD',
                                value: parseFloat(`${value.amount}`).toFixed(2),
                            },
                            category: 'DONATION',
                        },
                    ]
                }
            ]
            setUnits(fullUnits)
        });

        return () => subscription.unsubscribe();
    }, [])

    return (
        <Box as="section"
            w="100%">
            <Container
                className="grid"
                textAlign="center"
                py={[8, 12, 14]}>
                <Box className="gcol-12 gcol-md-12 gcol-lg-8 center"
                    w="100%">
                    {heading && (
                        <Heading as={position > 0 ? 'h2' : 'h1'}
                            lineHeight="1"
                            paddingBottom={["6", "8", "12"]}
                            fontSize={['4xl', '5xl', '6xl']}>
                            {heading}
                        </Heading>)
                    }
                    <Stack direction={['column', 'row']}
                        spacing={[6, 6, 8]}>
                        {image && (
                            <Box borderRadius="6px"
                                flex="1 1 50%"
                                layerStyle="boxShadowLight"
                                overflow="hidden">
                                <Image
                                    src={image?.src?.url}
                                    alt={image?.alt || heading}
                                    objectFit="cover"
                                    objectPosition="center"
                                    h="100%"
                                    w="100%"
                                />
                            </Box>

                        )}
                        <VStack as="form"
                            flex="1 1 50%"
                            p="1rem"
                            spacing="4"
                            borderRadius="6px"
                            backgroundColor="white"
                            layerStyle="boxShadowLight"
                            overflow="hidden">
                            <NumberInput
                                type="number"
                                showMoneyIcon={true}
                                id="amount"
                                name="amount"
                                label="Donation Amount"
                                minLength={{
                                    value: 1
                                }}
                                defaultValue={defaultDonationAmount}
                                isRequired={false}
                                isDisabled={isDisabled}
                                register={register}
                                errors={errors} />
                            <PayPal
                                clientId={clientId}
                                brandName={brandName}
                                spinner={true}
                                style={fundingStyling.map(() => ({
                                    layout: 'vertical',
                                    label: 'donate'
                                }))}
                                onDisableClick={onDisableClick}
                                fundingSources={fundingStyling}
                                purchaseUnit={units}
                                disableBtn={isDisabled}
                                onApprove={onSubmit}
                                onError={onError} />
                        </VStack>
                    </Stack>
                </Box>
            </Container>
        </Box>)
}

export default PaypalDonate
