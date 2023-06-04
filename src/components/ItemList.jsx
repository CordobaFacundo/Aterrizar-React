
import React from 'react'
import { Item } from './Item'
import { packs } from '../data/packs'

export const ItemList = () => {
  
  return (
    <>
        {
          packs.map( pack => (
            <Item key={pack.id} {...pack}/>
          ))
        }
    </>
  )
}
