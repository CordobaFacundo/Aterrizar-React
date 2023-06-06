
import React, { useState } from 'react'
import { Loading } from '../components/Loading/Loading'
import { ItemList } from '../components';


export const ItemListContainer = () => {
    
    const [loading, setLoading] = useState(true);
    setTimeout(function() {
        // Código a ejecutar después de x segundos
        setLoading(false);
      }, 1000);
    
    return (
    <>
      { loading ? <Loading /> : <ItemList /> }
    </>
  )
}
