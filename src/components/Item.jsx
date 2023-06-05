
import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ id, destination, price, description }) => {

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

      {/* <div className='container col animate__animated animate__fadeIn'>
        <div className='card mt-3'>
          <div className="row no-gutters">
            <div className='col-4'>
              <img src={imageUrl} className='card-img' alt={destination} />
            </div>

            <div className="col-8">
              <div className='card-body'>
                <h5 className='card-title'>{destination}</h5>
                <p className='card-text'>{description}</p>
                <p className='card-text'><small className='text-muted'>${price}</small></p>

                <Link to={`/hero/${id}`}>
                  Mas...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
