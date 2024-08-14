import React from 'react'
import HeroSlider from '../../Utils/Parent/HeroSlider'
import Section from '../../Layout/Section/Section'
import ProductsGroupCard from '../../Utils/Parent/ProductsGroupCard'
import { keepShoppingFor, whereYouLeft, yourHomeInStyle, saveWithGST, whereYouLeft2, continueShopping, keepShoppingFor2 } from '../../../MOCData/ProductListingData'

const HomeHero = () => {
  return (
    <Section>
        <HeroSlider />
        <div className="products-group-container fx">
            <ProductsGroupCard data={keepShoppingFor}/>
            <ProductsGroupCard data={whereYouLeft}/>
            <ProductsGroupCard data={yourHomeInStyle}/>
            <ProductsGroupCard data={saveWithGST}/>
        </div>
        
        <div className="products-group-container fx">
            <ProductsGroupCard data={whereYouLeft2}/>
            <ProductsGroupCard data={continueShopping}/>
            <ProductsGroupCard data={keepShoppingFor2}/>
            <ProductsGroupCard data={saveWithGST}/>
        </div>
    </Section>
  )
}

export default HomeHero