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
    colorScheme?: string;
}

const HeroTwoBlock = ({
    position = 0,
    title,
    subText1,
    subText2,
    subText3,
    cta,
    imgSrc,
    imgAlt,
    colorScheme = "prime1"
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
                        layout="fill" />
                </Box>
            </Box>

            <Container
                py={["8", "12", "14"]}
                marginTop={["auto"]}
                marginBottom={["auto", "0"]}
                flex={[null, '1 1 50%']}>
                {title && (
                    <Heading as={position > 0 ? 'h2' : 'h1'}
                        lineHeight="1.2"
                        marginBottom={(subText1 || subText2 || subText3 || cta) && "4"}
                        fontSize={["4xl", "4xl", "5xl"]}>
                        {title}
                    </Heading>)
                }
                <Box marginBottom={cta ? "4" : null}>
                    {subText1 && <Box as="p" fontSize="2xl" lineHeight="1.2">{subText1}</Box>}
                    {subText2 && <Box as="p" fontSize="2xl" lineHeight="1.2">{subText2}</Box>}
                    {subText3 && <Box as="p" fontSize="2xl" lineHeight="1.2">{subText3}</Box>}
                </Box>

                {
                    (cta && cta?.label && cta?.link) && <Link href={cta.link} passHref>
                        <Button as="a"
                            size="md"
                            target={cta.external ? "_blank" : undefined}
                            rel={cta.external ? "noopener noreferrer" : undefined}
                            cursor="pointer"
                            colorScheme={colorScheme}>
                            {cta.label}
                        </Button>
                    </Link>
                }
            </Container>
        </Box>
    </Box>
)

export default HeroTwoBlock