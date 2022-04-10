import * as React from 'react'
import { FooterProps } from './Footer';
import Footer from './Footer'
import Header, { HeaderProps } from './Header'
import Main from './Main'

export interface LayoutProps {
  headerProps: HeaderProps;
  footerProps: FooterProps;
  children: React.ReactNode;
}

const Layout = ({ headerProps, footerProps, children }: LayoutProps) => {
  return (<>
    <Header {...headerProps} />
    <Main>
      {children}
    </Main>
    <Footer {...footerProps} />
  </>)
}

export default Layout