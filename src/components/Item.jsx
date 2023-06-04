
import React from 'react'

export const Item = ({ id, destination, price, description }) => {

  const imageUrl = `/assets/${destination}.jpg`

  return (
    <>
      <div className='col animate__animated animate__fadeIn'>
        <div className='card mt-2'>
          <div className="row no-gutters">
            <div className='col-4'>
              <img src={imageUrl} className='card-img' alt={destination} />
            </div>

            <div className="col-8">
              <div className='card-body'>
                <h5 className='card-title'>{destination}</h5>
                <p className='card-text'>{description}</p>
                <p className='card-text'><small className='text-muted'>${price}</small></p>

                {/* <Link to={`/hero/${id}`}>
                  Mas...
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
