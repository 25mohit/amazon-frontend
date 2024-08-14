import React from 'react'
import { Link } from 'react-router-dom'
import ProductDisplayCard from '../Helpers/Card/ProductDisplayCard'

const ProductsGroupCard = ({ data }) => {
  return (
    <div className='ProductsGroupCard fdc' style={{height: `${data?.type === 'c4' ? 'fit-content' :''}`}}>
        <h2 className='heading'>{data?.heading}</h2>
        {
            data?.type !== 'c4' &&
            <section className='product-cont'>
                {
                    data?.products?.slice(0,4).map((dt, index) => <ProductDisplayCard key={index} data={dt} type={data?.type}/>)
                }
            </section>
        }
        {
            data?.type === 'c4' && <section><img src={data?.img} alt="" /></section>
        }
        <Link to={data?.url?.link} className='link'>{data?.url?.label}</Link>
    </div>
  )
}

export default ProductsGroupCard