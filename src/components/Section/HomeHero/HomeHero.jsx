import React from 'react'
import HeroSlider from '../../Utils/Parent/HeroSlider'
import Section from '../../Layout/Section/Section'
import ProductsGroupCard from '../../Utils/Parent/ProductsGroupCard'
import { keepShoppingFor, whereYouLeft, yourHomeInStyle, saveWithGST } from '../../../MOCData/ProductListingData'

const HomeHero = () => {
  return (
    <Section className='hero'>
        <HeroSlider />
        <div className="products-group-container fx">
            <ProductsGroupCard data={keepShoppingFor}/>
            <ProductsGroupCard data={whereYouLeft}/>
            <ProductsGroupCard data={yourHomeInStyle}/>
            <ProductsGroupCard data={saveWithGST}/>
        </div>
    </Section>
  )
}

export default HomeHero