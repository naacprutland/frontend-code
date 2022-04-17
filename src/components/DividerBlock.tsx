import { 
    Box
  } from "@chakra-ui/react"
import Container from './Container'

export interface DividerBlockProps {
    style?: "none" | "dark" | "white";
}

const styles = {
    dark: {
        backgroundColor: "secondary7.500",
        sx: {
            hr: {
                borderColor: "white"
            }
        }
    },
    none: {
        sx: {
            hr: {
                borderColor: "black"
            }
        }
    },
    white: {
        backgroundColor: "white",
        sx: {
            hr: {
                borderColor: "black"
            }
        }
    }
}

const DividerBlock = ({ style="none" }: DividerBlockProps) => {
    return (
        <Box {...styles[style]} width="100%">
            <Container py={['32px', '48px', '56px']}>
                <hr />
            </Container>
        </Box>
    )
}

export default DividerBlock