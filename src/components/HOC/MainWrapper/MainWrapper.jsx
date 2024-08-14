import { Outlet } from "react-router-dom"
import Navbar from "../../Utils/Parent/Navbar"

const MainWrapper = () => {
  return (
    <>
        <Navbar />
        <section>
            <Outlet />
        </section>
    </>
  )
}

export default MainWrapper