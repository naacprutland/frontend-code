import {
    Box
} from "@chakra-ui/react"
import Container from './Container'

export interface DividerBlockProps {
    contained?: boolean;
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

const DividerBlock = ({ style = "none", contained }: DividerBlockProps) => {
    return (
        <Box {...styles[style]} width="100%">
            <Container className={contained && "grid"} py={['32px', '48px', '56px']}>
                {
                    contained && <div className="gcol-12 gcol-md-10 gcol-lg-8 center"><hr /></div>
                }
                {
                    !contained && <hr />
                }
            </Container>
        </Box>
    )
}

export default DividerBlock