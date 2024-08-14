import { Outlet } from "react-router-dom"
import Navbar from "../../Utils/Parent/Navbar"
import Footer from "../../Utils/Parent/Footer"

const MainWrapper = () => {
  return (
    <>
      <Navbar />
      <section>
          <Outlet />
      </section>
      <Footer />
    </>
  )
}

export default MainWrapper