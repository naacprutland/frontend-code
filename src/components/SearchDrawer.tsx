import { useState, FormEvent } from 'react'
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    useTheme
  } from '@chakra-ui/react'
import Container from './Container'
import { MdClose, MdSearch } from "react-icons/md"

export interface SearchDrawerProps {
    onClose: () => void;
    isOpen: boolean;
}


const SearchDrawer = ({ onClose, isOpen }) => {
    const [key, setKey] = useState<string>('')
    const theme = useTheme()

    const onSubmit= (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        setKey(formData.get('search') as string)
    }

    return (
        <>
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerBody bg="black"
                    p="0"
                    h="100%"
                    display="flex"
                    minH={{ base: "3.25rem", sm: "4.75rem" }}>
                    <Container
                        d="flex"
                        alignContent="center"
                        flexDir="row"
                        display="flex"
                        color="white"
                        h="100%"> 
                        <Box as="form"
                            onSubmit={onSubmit}
                            w="100%"
                            mr={{ base: "4", md: "6" }}>
                            <InputGroup size='md'
                                minH="7"
                                >
                                <Input
                                    bg="prime1.500"
                                    pr='4.5rem'
                                    h="7"
                                    size="md"
                                    defaultValue={key}
                                    _autofill={{
                                        '-webkit-text-fill-color': theme.colors.prime2[500],
                                        '-webkit-box-shadow': `0 0 0 1000px ${theme.colors.prime1[500]} inset`,
                                        "-webkit-text-stroke-color": theme.colors.prime2[500],
                                    }}

                                    _hover={{
                                        borderColor: 'prime2.300'
                                    }}
                                    _focus={{
                                        zIndex: 1,
                                        boxShadow: '0 0 0 2px #3182ce'
                                    }}
                                    name="search"
                                    borderRadius="15px"
                                    type="text"
                                    borderColor="prime2.500"
                                    color="prime2.500"
                                    placeholder='Enter password'
                                />
                                <InputRightElement h="7" w="7">
                                    <IconButton
                                        type="submit"
                                        variant="outline"
                                        bg="prime1.500"
                                        h="7"
                                        minW="2"
                                        w="7"
                                        _active={{
                                            background: 'prime1.400'
                                        }}
                                        _hover={{
                                            background: 'prime1.300'
                                        }}
                                        borderRadius="50%"
                                        fontSize="md"
                                        color="prime2.500"
                                        colorScheme="prime2"
                                        aria-label="search"
                                        icon={<MdSearch />}
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        
                        <IconButton
                            h="7"
                            color="prime2.500"
                            onClick={onClose}
                            variant="outline"
                            minW="7"
                            w="7"
                            _active={{
                                background: 'prime1.400'
                            }}
                            _hover={{
                                background: 'prime1.300'
                            }}
                            bg="prime1.500"
                            borderRadius="50%"
                            fontSize="md"
                            colorScheme="prime2"
                            aria-label="close"
                            icon={<MdClose />} />
                    </Container>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SearchDrawer