import NavbarBelt from '../Helpers/MainNavbar/NavbarBelt'
import NavbarMain from '../Helpers/MainNavbar/NavbarMain'

const Navbar = () => {
    console.log("Navbar Rendering");
    
  return (
    <header className='navbar fdc'>
      <NavbarBelt />
      <NavbarMain />
    </header>
  )
}

export default Navbar