import { useState } from 'react'
import { 
    Box,
    CloseButton,
    Flex,
    Collapse
  } from "@chakra-ui/react"
import { createMarkup } from "../lib/util";

export interface BannerProps {
    closeable: boolean;
    richText: string;
    variation: 'info' | 'warning' | 'alert';
}

const variants = {
    info: {
        bg: "prime1.500",
        color: "white"
    },
    warning: {
        bg: "prime2.500",
        color: "prime1.500"
    },
    alert: {
        bg: "red.800",
        color: "white"
    }
}

const Banner = ({
        closeable,
        richText,
        variation
    }: BannerProps) => {
        const [showBan, setShowBan] = useState<boolean>(true)
        const onClose = (): void => setShowBan(false)
        return (
            <Collapse in={showBan} animateOpacity >
                    <Flex
                    position="relative"
                    justifyContent="center"
                    { ...variants[variation] }
                    py="8px"
                    px="40px"
                    w="100%"
                    >
                    <Box
                        className="content"
                        lineHeight="1"
                        fontSize={"14px"} 
                        dangerouslySetInnerHTML={createMarkup(richText)}>
                    </Box>
                    { closeable && (<CloseButton size='sm'
                        onClick={onClose}
                        position="absolute"
                        top="50%"
                        transform="translateY(-50%)"
                        right="16px" />) }
                </Flex>
            </Collapse>   
    )}

export default Banner