import { useState, useEffect } from 'react'
import {
    Box,
    VStack,
    Stat,
    StatLabel,
    StatNumber,
    useToast
} from "@chakra-ui/react"
import { MemberOptions } from "../interface/checkout";
import { PurchaseItem, UpdateResult } from "../interface/general";
import Container from "./Container"
import PayPal from "./PayPal"
import { PurchaseUnit } from "@paypal/paypal-js/types/apis/orders"
import { OnApproveData } from "@paypal/paypal-js/types/components/buttons"

export interface BuyBoxProps {
    clientId: string;
    additionalFees: PurchaseItem[];
    brandName: string;
    disableBtn?: boolean;
    selectedItem: MemberOptions | undefined;
    optionType: UpdateResult | undefined;
    fundingStyling?: string[];
    onSubmit?: (data: OnApproveData) => void;
    onDisableClick?: () => void;
}

const BuyBox = ({
    additionalFees = [],
    brandName,
    clientId,
    disableBtn,
    selectedItem,
    fundingStyling = [undefined],
    optionType,
    onSubmit,
    onDisableClick
}: BuyBoxProps) => {
    const [items, setItems] = useState<PurchaseItem[]>([])
    const [total, setTotal] = useState<number | null>(null)
    const [units, setUnits] = useState<PurchaseUnit[]>([])
    const toast = useToast()

    useEffect(() => {
        const fullItems = [
            ...additionalFees
        ]

        if (selectedItem && optionType) {
            if (optionType?.values?.paymentType) {
                const pymtOption = selectedItem.paymentOptions.find(opt => {
                    return opt.slug === optionType.values.paymentType
                })

                if (pymtOption) {
                    fullItems.unshift({
                        label: selectedItem.title,
                        amount: pymtOption.price
                    })
                }
            } else {
                fullItems.unshift({
                    label: selectedItem.title,
                    amount: selectedItem.price
                })
            }
        }

        let itemsTotal = null

        if (fullItems.length > 0) {
            itemsTotal = Number(
                fullItems.reduce((acc: number, cur) => {
                    return acc + cur.amount
                }, 0).toFixed(2))
        }

        const fullUnits = [
            {
                amount: {
                    currency_code: 'USD',
                    value: parseFloat(`${itemsTotal}`).toFixed(2),
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: parseFloat(`${itemsTotal}`).toFixed(2)
                        }
                    }
                },
                items: fullItems.map(v => {
                    return {
                        name: v.label,
                        quantity: '1',
                        unit_amount: {
                            currency_code: 'USD',
                            value: parseFloat(`${v.amount}`).toFixed(2),
                        }
                    }
                })
            }
        ]
        setUnits(fullUnits)
        setTotal(itemsTotal)
        setItems(fullItems)
    }, [additionalFees,
        selectedItem,
        optionType])

    const onError = (err: Record<string, unknown>) => {
        // eslint-disable-next-line no-console
        console.log(err)
        toast({
            title: 'Payment error',
            description: 'There was an issue submitting your payment',
            status: 'error',
            isClosable: true,
        })
    }

    return (
        <Container className="grid">
            <Box className="gcol-12 gcol-md-8 gcol-lg-6 center"
                padding={["24px 8px", "24px", "32px 32px"]}
                backgroundColor="white"
                borderRadius="6px"
                layerStyle="boxShadowLight">
                <VStack spacing="24px">
                    {!disableBtn && (
                        <VStack spacing="8px" width="100%">
                            {items.map((v, i) => (
                                <Stat key={v.label + i}
                                    width="100%"
                                    sx={{
                                        dl: {
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }
                                    }}>
                                    <StatLabel
                                        lineHeight="1"
                                        fontSize="18px"
                                        fontWeight="600">
                                        {v.label}:
                                    </StatLabel>
                                    <StatNumber
                                        lineHeight="1"
                                        fontSize="18px"
                                        fontWeight="600">
                                        ${v.amount}
                                    </StatNumber>
                                </Stat>))
                            }
                        </VStack>)
                    }

                    {(!isNaN(total) && null !== total && !disableBtn) && (
                        <Stat
                            width="100%"
                            sx={{
                                dl: {
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }
                            }}
                        >
                            <StatLabel
                                lineHeight="1"
                                fontSize="24px"
                                fontWeight="600">
                                Total:
                            </StatLabel>
                            <StatNumber
                                fontSize="24px"
                                fontWeight="600">
                                ${total}
                            </StatNumber>
                        </Stat>
                    )}
                    <PayPal
                        clientId={clientId}
                        brandName={brandName}
                        spinner={true}
                        style={fundingStyling.map(() => ({
                            layout: 'vertical',
                            label: 'checkout'
                        }))}
                        onDisableClick={onDisableClick}
                        fundingSources={fundingStyling}
                        purchaseUnit={units}
                        disableBtn={disableBtn}
                        onApprove={onSubmit}
                        onError={onError} />
                </VStack>
            </Box>
        </Container >
    )
}

export default BuyBox