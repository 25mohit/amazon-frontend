import React from 'react'
import { RiCloseLargeLine } from "react-icons/ri";
import { sidebarData } from '../../../MOCData/CategorySidebarData';
import SidebarOption from '../../Utils/Helpers/Sidebar/SidebarOption';

const CategorySidebar = ({ setShowCategoryBar, showCategoryBar }) => {
  
  return (
    <div className={`category-sidebar ${(showCategoryBar !== null && showCategoryBar) ? 'visible':'hidden'}`}>
      <header className='aic'>
        <RiCloseLargeLine id='close-icon' className='cp' onClick={() => setShowCategoryBar(false)}/>
        asdasd
      </header>
      <section>
        <ul className='fdc'>
          {
            sidebarData?.map((data, index) => 
              <React.Fragment key={index}>
                <SidebarOption data={data} label={data?.heading}/>
                {
                  data?.options?.map((dt, ind) => 
                    <React.Fragment key={ind}>
                      <SidebarOption data={dt} label={dt?.label}/>
                    </React.Fragment>)
                    
                }
                {  console.log("sidebarData", sidebarData.length, index)                }
                { sidebarData?.length !== index+1 && <li className='seperator'></li> }
              </React.Fragment>)
          }
        </ul>
      </section>
    </div>
  )
}

export default CategorySidebar