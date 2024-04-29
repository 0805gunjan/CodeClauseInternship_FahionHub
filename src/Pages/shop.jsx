import React from 'react'
import Hero from '../Components/Hero/hero'
import Popular from '../Components/Popular/popular'
import Offer from '../Components/Offers/offer'
import NewCollections from '../Components/new_collections/newCollection'
import NewsLetter from '../Components/newsLetter/NewsLetter'


const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default shop
