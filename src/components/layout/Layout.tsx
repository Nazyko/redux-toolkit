import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Status } from '../status/Status'

const Layout = () => {
  return (
    <>
      <Header />
      <Status />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
