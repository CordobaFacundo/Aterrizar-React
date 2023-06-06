import React from 'react'

export const ItemDetail = ({ description, destination, price }) => {

  const imageUrl = `/assets/${destination}.jpg`
  
  return (
    <>
      <div className="conteiner">
        <div className="row g-0 bg-light position-relative" style={{ margin: "3%" }}>
          <div className="col-md-6 mb-md-0 p-md-4">
            <img id="imagenDestino" src={imageUrl} className="w-100" width="550" height="450" /></div>
          <div className="col-md-6 p-4 ps-md-0">
            <h3 className="card-title">{destination}</h3><hr />
            <p className="card-text"><small className="text-muted">Este paquete incluye ida y vuelta</small></p>
            <p>Descripcion : {description}</p>
            <p>Proximamente: salsas</p>
            <p>Proximamente: bebidas</p>
            Precio:
            <p style={{ fontSize: '40px' }}><i class="bi bi-currency-dollar"></i>{price}</p><hr />
            {/* {
              test == 'button' ?
                pack.stock > 0 ?
                  <ItemCount stockTot={pack.stock} initial={1} onAdd={onAdd} />
                  :
                  <div class="alert alert-danger" role="alert">Stock no disponible</div>
                :
                <div>
                  <Link to={'/Cart'}>
                    <button className="btn btn-primary">Terminar compra</button>
                  </Link>
                </div>
            } */}
          </div>
        </div>
      </div>
    </>
  )
}
