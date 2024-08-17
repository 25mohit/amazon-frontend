import NavbarBelt from '../Helpers/MainNavbar/NavbarBelt'
import NavbarMain from '../Helpers/MainNavbar/NavbarMain'

const Navbar = () => {
    console.log("Navbar Rendering");

    const searchResult = [
      '<p>i<span>Phone</span> 15 pro max</p>', '<p>i<span>phone</span></p>', '<p>i<span>phone</span> 15 pro</p>', '<p>i<span>pad</span></p>', '<p>i<span>phone</span> 14 plus</p>', '<p>i<span>phone</span> 12</p>', '<p>i<span>phone</span> 14 pro</p>', '<p>i<span>phone</span> 13 pro</p>', '<p>ipad 10th generation'
    ]
    
  return (
    <header className='navbar fdc'>
      <NavbarBelt searchResult={searchResult}/>
      <NavbarMain />
    </header>
  )
}

export default Navbar