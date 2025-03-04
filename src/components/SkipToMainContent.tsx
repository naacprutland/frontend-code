import { 
    Link
} from '@chakra-ui/react'

export interface SkipToMainContentProps {
    href: string;
}


const SkipToMainContent = ({ href }) => (
    <Link 
        href={href}
        textTransform="capitalize"
        px="4"
        py="2"
        background="cyan.600"
        borderRadius="1.5"
        color="white"
        position="absolute"
        left={[5,8,10]}
        top="2"
        transition="all 0.4s"
        transform="translateY(-100px)"
        _focus={{
            transform: "translateY(0)",
            outline: "2px solid"
        }}
        width="auto"
        zIndex="9999">Skip To main Content</Link>
)

export default SkipToMainContent