
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading/Loading';
import { ItemDetail } from '../components/ItemDetail';
import { getPackById } from '../helpers/getPackById';

export const ItemDetailContainer = () => {
  
  const [loading, setLoading] = useState(true);
  setTimeout(function() {
    // Código a ejecutar después de x segundos
    setLoading(false);
  }, 1000);

  const { id } = useParams();
  const pack = getPackById( id );
  
  return (
    <>
        { loading ? <Loading /> : <ItemDetail { ...pack }  /> }
    </>
  )
}
