import * as React from 'react'
// import Footer from './Footer'
import Header, { HeaderProps } from './Header'
import Main from './Main'

export interface LayoutProps {
  headerProps: HeaderProps;
  children: React.ReactNode;
}

const Layout = ({ headerProps, children }: LayoutProps) => {
  console.log({headerProps})
  return (<>
    <Header {...headerProps} />
    <Main>
      {children}
    </Main>
    {/* <Footer /> */}
  </>)
}

export default Layout