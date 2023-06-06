
import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({ id, destination, price, description }) => {

  const imageUrl = `/assets/${destination}.jpg`

  return (
    <>
      <div className="col-sm-3">
        <div className="card" style={{ width: '18rem', margin: '5%' }}>
          <img className="card-img-top" src={imageUrl} alt="Card image cap" width="300" height="200" />
          <div className="card-body"> Paquete
            <h3 className="card-title">{destination.toUpperCase()}</h3>
            <div className="card-text">{description}</div><hr />
            Precio:
            <p style={{ fontSize: '40px' }}>${price}</p>
            <Link to={`/detail/${id}`}>
              <button type="button" className="btn btn-primary btn-adminbutton">Ver detalle</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
