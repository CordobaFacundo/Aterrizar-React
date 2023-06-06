
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading/Loading';
import { ItemDetail } from '../components/ItemDetail';
import { getPackById, getPackByName } from '../helpers';


export const ItemDetailContainer = () => {
  
  const [loading, setLoading] = useState(true);
  setTimeout(function() {
    // Código a ejecutar después de x segundos
    setLoading(false);
  }, 1000);

  const { id, destination } = useParams();
  const packByID = getPackById( id );
  console.log(destination)
  
  return (
    <>
        { loading ? <Loading /> : <ItemDetail { ...packByID }  /> }
    </>
  )
}
