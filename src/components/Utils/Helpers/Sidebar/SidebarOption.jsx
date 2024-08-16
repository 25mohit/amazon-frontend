import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SidebarOption = ({ data, label }) => {
  return (
    <li className=' aic jcsb'>
        { data?.heading ? <div className={data?.heading ? 'heading' : 'content'}>{label}</div> : <Link className='content aic'>{label}</Link> }
        { data?.nestedOption !== undefined && <FaAngleRight /> }
    </li>
  )
}

export default SidebarOption