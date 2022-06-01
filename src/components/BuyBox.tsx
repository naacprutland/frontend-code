import { useState, useEffect } from 'react'
import {
    Box,
    VStack,
    Stat,
    StatLabel,
    StatNumber,
} from "@chakra-ui/react"
import { MemberOptions } from "../interface/checkout";
import { UpdateResult } from "../interface/general";
import Container from "./Container"
import { RespForm } from "./FormBlock";

export interface PurchaseItem {
    label: string;
    amount: number;
}

export interface BuyBoxProps {
    additionalFees: PurchaseItem[];
    selectedItem: MemberOptions | undefined;
    optionType: UpdateResult | undefined;
    userData: RespForm | undefined;
    onSubmit: () => boolean;
}

const BuyBox = ({
    additionalFees = [],
    selectedItem,
    optionType,
    userData
}: BuyBoxProps) => {
    const [items, setItems] = useState<PurchaseItem[]>([])
    const [total, setTotal] = useState<number | null>(null)

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
                        label: pymtOption.label,
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

        setTotal(itemsTotal)
        setItems(fullItems)
    }, [additionalFees,
        selectedItem,
        optionType,
        userData])

    return (
        <Container className="grid">
            <Box className="gcol-12 gcol-md-8 gcol-lg-6 center"
                padding={["24px 8px", "24px", "32px 32px"]}
                backgroundColor="white"
                borderRadius="6px"
                layerStyle="boxShadowLight">
                <VStack spacing="24px">
                    <VStack spacing="8px">
                        {items.map((v, i) => (
                            <Stat key={v.label + i}
                                display="flex"
                                justifyContent="space-between">
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
                    </VStack>
                    {!isNaN(total) && (
                        <Stat display="flex"
                            justifyContent="space-between"
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
                </VStack>
            </Box>
        </Container >
    )
}

export default BuyBox