import { Button, Wrap, WrapItem  } from '@chakra-ui/react'
import Link from 'next/link'
import { AlignItems, AlignItemsOptions } from '../interface/enums'
import { v4 as uuidv4 } from 'uuid';

export type BtnColor = "blue" | "cyan" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "teal" | "yellow" | "whiteAlpha" | "blackAlpha" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
export type BtnVariant = "link" | "outline" | "solid" | "ghost" | "unstyled"
export interface CTABtn {
  label: string;
  link: string;
  external: boolean;
}
export interface CTAListProps {
  cta: CTABtn[];
  groupPosition: AlignItemsOptions;
  size: "xs" | "sm" | "md" | "lg";
  colorScheme: BtnColor;
  variant: BtnVariant;
}

const CtaList = ({ cta=[], groupPosition, ...btnProps }: CTAListProps) => (
    <>
      {(cta?.length > 0) && (
        <Wrap justify={AlignItems[groupPosition]} width="100%" spacing={2} py={2}>
          {cta.map(({ label="", link="", external=false }) => ( 
              <WrapItem key={uuidv4()}>
                  <Link href={link} passHref>
                    <Button as="a"
                        href=""
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        cursor="pointer"
                        {...btnProps}>
                      {label}
                    </Button>     
                  </Link>
              </WrapItem>
            )
          ).slice(0, 4)}
        </Wrap>)}
  </>)

export default CtaList