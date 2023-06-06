
import React from 'react'
import { ItemCard } from '../components'
import { packs } from '../data/packs'

export const ItemList = () => {
  
  return (
    <>
      <div className='row row-cols-2 g-3'>
        {
          packs.map( pack => (
            <ItemCard key={pack.id} {...pack}/>
          ))
        }
      </div>
    </>
  )
}
