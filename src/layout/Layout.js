import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import dynamic from 'next/dynamic';


const BgAnimation = dynamic(() => import("../components/BackgroundImg/BackgroundImg"), {
  ssr: false,
});

export const Layout = ({children}) => {
  return (
    <>
    <BgAnimation />
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
    </>
    )
}
