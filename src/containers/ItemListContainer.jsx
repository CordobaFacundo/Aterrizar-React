
import React, { useState } from 'react'
import { Loading } from '../components/Loading/Loading'
import { ItemList } from '../components';


export const ItemListContainer = () => {
    
    const [loading, setLoading] = useState(true);
    setTimeout(function() {
        // Código a ejecutar después de 3 segundos
        setLoading(false);
      }, 2000);
    
    return (
    <>
        { loading ? <Loading /> : <ItemList /> }
    </>
  )
}
