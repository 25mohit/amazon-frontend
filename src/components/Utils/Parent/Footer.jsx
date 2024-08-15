import React from 'react'
import { Link } from 'react-router-dom'
import { RxGlobe } from "react-icons/rx";
import { LuChevronsUpDown } from "react-icons/lu";
import { footData } from '../../../MOCData/FooterData';

const Footer = () => {
  return (
    <footer className='fdc'>
      <Link to="" className='first-row jcc' style={{color: '#FFF'}}>Back to top</Link>
      <section className='second-row fdc'>
        <div className="links-container">
          <div className="cont fx">
            {
              footData?.webLinks?.map((data, index) => (
                <React.Fragment key={index}>
                  <div className='fdc links'>
                    <h3 className='heading'>{data?.heading}</h3>
                    <ul>
                      {
                        data?.links?.map((dt, ind) => <li key={ind}><Link to={dt?.url}>{dt?.label}</Link></li>)
                      }
                    </ul>
                  </div>
                {index !== footData?.webLinks?.length-1 && <div className="space"></div>}
                </React.Fragment>
              ))
            }
          </div>
        </div>
        <div className="nav-footer-line"></div>
        <div className="lang-sec fx aic jcc">
          <Link to="/" className='aic'><img className='foot-logo' src="./Assets/Images/logo.png" alt="" /></Link>
          <div className="btns fx">
            <div className="custom-btn">
              <RxGlobe />
              <span>English</span>
              <LuChevronsUpDown />
            </div>
            <div className="custom-btn">
              <img src="./Assets/Images/india-flag.png" alt="" />
              <span>India</span>
            </div>
          </div>
        </div>
      </section>
      <div className="third-row fdc">
        <section className='fdc'>
          <table>
            <tbody>
              <tr>
                <td><a href="">AbeBooks <span>Books, art <br /> & collectibles</span></a></td>
                <td className="space-gap"></td>
                <td><a href="">Amazon Web Services<span>Scalable Cloud <br/>COmputing Services</span></a></td>
                <td className="space-gap"></td>
                <td><a href="">Audible<span>Download<br/>Audio Books</span></a></td>
                <td className="space-gap"></td>
                <td><a href="">IMDb<span>Movies, TV<br/>& Celebrities</span></a></td>
                <td className="space-gap"></td>
              </tr>
              <tr className="space"></tr>
              <tr>
                <td><a href="">Shopbop<span>Designer<br/>Fashion Brands</span></a></td>
                <td className="space-gap"></td>
                <td><a href="">Amazon Business<span>Everything For<br/>Your Business</span></a></td>
                <td className="space-gap"></td>
                <td><a href="">Prime Now<span>2-Hour Delivery<br/> on Everyday Items</span></a></td>
                <td className="space-gap"></td>
                <td><a href="">Amazon Prime Music<span>100 million songs, ad-free<br/>Over 15 million podcast episodes</span></a></td>
                <td className="space-gap"></td>
              </tr>
            </tbody>
          </table>
          <div className="copywrite-section fdc jcc">
            <ul className='fx'>
              <li><a href="">Conditions of Use & Sale</a></li>
              <li><a href="">Privacy Notice</a></li>
              <li><a href="">Interest-Based Ads</a></li>
            </ul>
            <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer