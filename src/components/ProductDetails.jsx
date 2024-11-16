import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Card from 'react-bootstrap/Card';
import Product from './Product';

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((prodcut) => prodcut.id == id);
    //  console.log(filterProduct)
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (prod) => prod.category === product.category
    );

    console.log('RelatedProduct = ', relatedProducts);
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center gap-4rem">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <button className="btn btn-primary mx-3">₹ {product.price}</button>
          <button className="btn btn-warning">Add to cart</button>
        </div>
      </div>
      <h1 className="variant-primary text-center">Related product</h1>
      <Product items={relatedProducts} />
    </>
  );
}
export default ProductDetails;
