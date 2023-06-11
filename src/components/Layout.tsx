import React from 'react'
import Header, { HeaderProps } from '@/components/molecules/Header/Header'
import Footer from '@/components/molecules/Footer'

type LayoutProps = {
    children: React.ReactNode
} & HeaderProps

const Layout: React.FC<LayoutProps> = ({ children, withSearch }) => {
    return (
        <React.Fragment>
            <Header withSearch={withSearch} />
            {children}
            <Footer />
        </React.Fragment>
    )
}

export default Layout
