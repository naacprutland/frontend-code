import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


export interface MediaModelProps {
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

const MediaModal = ({
    children,
    isOpen,
    onClose
}: MediaModelProps) => {
    return (
        <>
            <Modal onClose={onClose} size="5xl" isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent
                    sx={{
                        "@media only screen and (orientation : landscape) and (min-width: calc(100vh * 1.8)) ": {
                            maxWidth: "calc(100vh * 1.8)",
                            marginTop: '0',
                            marginBottom: '0'
                        }
                    }}
                    h="95%"
                    maxH="100vh"
                    color="white"
                    backgroundColor="blackAlpha.300">
                    <ModalCloseButton />
                    <ModalBody h="100%" pl="12" pr="12"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default MediaModal