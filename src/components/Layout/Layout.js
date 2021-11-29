import React, { useState } from "react"
import Header from "../Header/Header"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import Hamburger from "../Hamburger/Hambuger"
import Footer from "../Footer/Footer"
import { GlobalStyles, Primary } from "./Layout.styles"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleOverlayMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  )
}

export default Layout
