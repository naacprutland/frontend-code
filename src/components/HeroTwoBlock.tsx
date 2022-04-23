import {
    Heading,
    Box,
    Button
  } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { CTABtn } from './HeroBlock'

export interface HeroTwoBlockProps {
    position?: number;
    title: string;
    subText1?: string;
    subText2?: string;
    subText3?: string;
    cta?: CTABtn;
    imgSrc: string;
    imgAlt: string;
}

const HeroTwoBlock = ({
    position = 0,
    title,
    subText1,
    subText2,
    subText3,
    cta,
    imgSrc,
    imgAlt
}: HeroTwoBlockProps) => (
    <Box as="section" 
        backgroundColor="secondary7.500" 
        color="white"
        overflow="hi"
        height={[null, "500px"]}
        maxHeight={[null, "500px"]}>
        <Box display={["block", "flex"]} 
            height="100%"
            maxW="1452px" 
            marginLeft="auto"
            marginRight="auto">
            <Box 
                height={["0", "auto"]}
                position="relative"
                paddingTop={["100%", "0"]}
                flex={[null, '1 1 50%']}
                width="100%">
                <Box position={"absolute"}
                    overflow="hidden"
                    height="100%"
                    width="100%"
                    top={["0", "-50%"]}
                    transform={[null, "translateY(50%)"]}
                    right="0">
                    <Image 
                        src={imgSrc}
                        objectFit="cover"
                        objectPosition="center"
                        alt={imgAlt}
                        height="726px"
                        width="726px"
                        layout="fill" />
                </Box>
            </Box>
            
            <Container 
                py={["32px", "48px", "56px"]} 
                marginTop={["auto"]}
                marginBottom={["auto", "0"]}
                flex={[null, '1 1 50%']}>
                {title && (
                    <Heading as={position > 0 ? 'h2' : 'h1'}
                    marginBottom={(subText1 || subText2 || subText3 || cta) && "16px"}
                    fontSize={["4xl", "4xl", "5xl"]}>
                    {title}
                    </Heading>)
                }
                <Box marginBottom={cta ? '16px' : null}>
                    {subText1 && <Box as="p">{subText1}</Box>}
                    {subText2 && <Box as="p">{subText2}</Box>}
                    {subText3 && <Box as="p">{subText3}</Box>}
                </Box>

                {
                    cta && <Link href={cta.link} passHref>
                        <Button as="a"
                        size="md"
                        target={cta.external ? "_blank" : undefined}
                        rel={cta.external ? "noopener noreferrer" : undefined}
                        cursor="pointer"
                        colorScheme="purple">
                        {cta.label}
                        </Button>
                    </Link>
                }
            </Container>
        </Box>
    </Box>
)

  export default HeroTwoBlock