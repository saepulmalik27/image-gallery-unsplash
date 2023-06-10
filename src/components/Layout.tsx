import React from 'react'
import Header from '@/components/molecules/Header'
import Footer from '@/components/molecules/Footer'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}

export default Layout
