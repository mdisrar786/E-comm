import React from 'react';
// import { items } from './Data';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product({ items }) {
  return (
    <>
      <div key={Product.id} className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 my-3 text-center"
                >
                  <Card style={{ width: '18rem' }}>
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Card.Img variant="top" src={product.imgSrc} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <button className="btn btn-primary mx-3">
                        ₹ {product.price}
                      </button>
                      <button className="btn btn-warning">Add to cart</button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Product;
