import { Link } from "react-router-dom"
import { MdOutlineLocationOn } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import LanguageDropdown from "../../Dropdown/LanguageDropdown";
import { useEffect, useState } from "react";
import AccountDropdown from "../../Dropdown/AccountDropdown";

const NavbarBelt = () => {

  const [language, setLanguage] = useState(false)
  const [account, setAccount] = useState(false)

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
        <div className="country-dropdown fdc cp" onMouseEnter={() => setLanguage(true)}  onMouseLeave={() => setLanguage(false)}  onClick={() => setLanguage(!language)}>
          <span className="line-1-text">&nbsp;</span>
          <div className="country">
            <img src="./Assets/Images/india-flag.png" alt="" />
            <span className="line-2-text">EN</span>
            <FaCaretDown />
          </div>
          { language && <LanguageDropdown /> }
        </div>
        <Link to="gp/your-account" className="account-dropdown fdc cp" onMouseEnter={() => setAccount(true)}  onMouseLeave={() => setAccount(false)}  onClick={() => setAccount(!account)}>
          <span className="line-1-text">Hello, mohit</span>
          <span className="line-2-text">Account & Lists <FaCaretDown /></span>
          { account && <AccountDropdown /> }
        </Link>
        <Link to="gp/order-history" className="user-orders fdc cp">
          <span className="line-1-text">Returns</span>
          <span className="line-2-text">& Orders</span>
        </Link>
        <Link to="gp/cart" className="cart-length fx aic cp">
          <div className="cart-logo">
            <span className="cart-num">0</span>
            <PiShoppingCartSimple id="cart-icon"/>
          </div>
          <div className="label fdc">
            <span className="line-1-text">&nbsp;</span>
            <span className="line-2-text">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NavbarBelt