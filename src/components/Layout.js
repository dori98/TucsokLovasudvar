import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ModalImage from "./ModalImage";

const Layout = ({children}) => {

    return (
        <>
            <Navbar/>
            {children}
            <ModalImage/>
            <Footer/>
        </>
    )
}
export default Layout
