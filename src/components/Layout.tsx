import * as React from 'react'
import { FooterProps } from './Footer';
import Footer from './Footer'
import Header, { HeaderProps } from './Header'

export interface LayoutProps {
  headerProps: HeaderProps;
  footerProps: FooterProps;
  children: React.ReactNode;
}

const Layout = ({ headerProps, footerProps, children }: LayoutProps) => {
  return (
    <>
      <Header {...headerProps} />
      <main id="mainContent">
        {children}
      </main>
      <Footer {...footerProps} />
    </>
  )
}

export default Layout