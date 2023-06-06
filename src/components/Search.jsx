
import React from 'react'
import { packs } from '../data/packs'
import { ItemCard } from './ItemCard'
import { useLocation, useNavigate } from 'react-router-dom';
import { getPackByName } from '../helpers/getPackByName'
import queryString from 'query-string';
import { useForm } from '../hooks/useForm';

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const packs = getPackByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <div className='row' style={{marginLeft: '20px', marginRight: '20px'}}>

        <h4>Paquetes de vuelos a diferentes puntos del pais y exteriores</h4>
        <hr />

        <form className='form-ms' onSubmit={onSearchSubmit}>
          <div className="input-group mb-3">
            <input 
              type="text"  
              className="form-control" 
              placeholder="Escribe tu destino" 
              aria-label="Nombre de usuario del destinatario" 
              aria-describedby="button-addon2"
              name='searchText' 
              autoComplete='off' 
              value={ searchText }
              onChange={onInputChange} 
            />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
          </div>
        </form>
      </div>
    </>
  )
}
