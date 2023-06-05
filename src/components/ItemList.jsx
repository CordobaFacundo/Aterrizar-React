
import React from 'react'
import { Item } from './Item'
import { packs } from '../data/packs'

export const ItemList = () => {
  
  return (
    <>
      <div className='row' style={{ marginLeft: 0, marginRight: 0 }}>
        {
          packs.map( pack => (
            <Item key={pack.id} {...pack}/>
          ))
        }
      </div>
    </>
  )
}
