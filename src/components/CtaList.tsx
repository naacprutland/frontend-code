import { Button, Wrap, WrapItem, WrapProps } from '@chakra-ui/react'
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
export interface CTAListProps extends Partial<WrapProps>{
  cta: CTABtn[];
  groupPosition: AlignItemsOptions;
  size: "xs" | "sm" | "md" | "lg";
  colorScheme: BtnColor;
  variant: BtnVariant;
}

const CtaList = ({ 
  cta=[],
  groupPosition,
  size,
  colorScheme,
  variant,
  ...wrapProps
 }: CTAListProps) => (
    <>
      {(cta?.length > 0) && (
        <Wrap 
          justify={AlignItems[groupPosition]}
          {...wrapProps}
          width="100%"
          spacing={2}>
          {cta.map(({ label="", link="", external=false }) => ( 
              <WrapItem key={uuidv4()}>
                  <Link href={link} passHref>
                    <Button as="a"
                        href=""
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        cursor="pointer"
                        size={size}
                        colorScheme={colorScheme}
                        variant={variant}>
                      {label}
                    </Button>     
                  </Link>
              </WrapItem>
            )
          ).slice(0, 4)}
        </Wrap>)}
  </>)

export default CtaList