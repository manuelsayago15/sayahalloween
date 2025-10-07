import Navbar from "./Navbar"
import HashScrollHandler from "./HashScrollHandler"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <HashScrollHandler />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
