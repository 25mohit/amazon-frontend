import NavbarBelt from '../Helpers/MainNavbar/NavbarBelt'
import NavbarMain from '../Helpers/MainNavbar/NavbarMain'

const Navbar = () => {
    console.log("Navbar Rendering");

    const searchResult = [
      'iPhone 15 pro max', 'iphone', 'iphone 15 pro', 'ipad', 'iphone 14 plus', 'iphone 12', 'iphone 14 pro', 'iphone 13 pro', 'ipad 10th generation'
    ]
    
  return (
    <header className='navbar fdc'>
      <NavbarBelt searchResult={searchResult}/>
      <NavbarMain />
    </header>
  )
}

export default Navbar