import * as React from 'react'
import Footer from './Footer'
import Header, { HeaderProps } from './Header'
import Main from './Main'

export interface LayoutProps {
  headerData: HeaderProps;
  children: React.ReactNode;
}

const Layout = ({ headerData, children }: LayoutProps) => {
  return (<>
    <Header {...headerData} />
    <Main>
      {children}
    </Main>
    <Footer />
  </>)
}

export default Layout