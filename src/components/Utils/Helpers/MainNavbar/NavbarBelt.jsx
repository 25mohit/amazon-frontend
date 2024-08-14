import { Link } from "react-router-dom"
import { MdOutlineLocationOn } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";

const NavbarBelt = () => {
  return (
    <div className="navbar-belt jcsb">
      <div className="left-part aic">
        <Link to='/' className="logo">
          <img src="./Assets/Images/logo.png" alt="" />
          <span>.in</span>
        </Link>
        <div className="user-location aic fx">
          <MdOutlineLocationOn />
          <div className="area fdc">
            <span className="line-1-text">
              Deliver to Mohit
            </span>
            <span className="line-2-text">Jaipur 302017</span>
          </div>
        </div>
      </div>
      <div className="fill-part aic">
        <div className="search-field jcsb">
          <select name="" id="" className="category-list">
            <option value="All">All</option>
          </select>
          <input type="text" className="search-input" placeholder="Search Amazon.in"/>
          <div className="search jcc">
            <BsSearch id="search-icon"/>
          </div>
        </div>
      </div>
      <div className="right-part jcsb">
        <div className="country-dropdown fdc cp">
          <span className="line-1-text">&nbsp;</span>
          <div className="country">
            <img src="./Assets/Images/india-flag.png" alt="" />
            <span className="line-2-text">EN</span>
            <FaCaretDown />
          </div>
        </div>
        <div className="account-dropdown fdc cp">
          <span className="line-1-text">Hello, mohit</span>
          <span className="line-2-text">Account & Lists <FaCaretDown /></span>
        </div>
        <div className="user-orders fdc cp">
          <span className="line-1-text">Returns</span>
          <span className="line-2-text">& Orders</span>
        </div>
        <div className="cart-length fx aic cp">
          <div className="cart-logo">
            <span className="cart-num">0</span>
            <PiShoppingCartSimple id="cart-icon"/>
          </div>
          <div className="label fdc">
            <span className="line-1-text">&nbsp;</span>
            <span className="line-2-text">Cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarBelt