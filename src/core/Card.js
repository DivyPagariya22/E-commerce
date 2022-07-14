import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = function (f) {
    return f;
  }, //f => f
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from DB";
  const cartDescription = product ? product.description : "DEFAULT";
  const cartPrice = product ? product.price : 100;

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Navigate to='/cart' />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={() => {
            addToCart();
          }}
          className='btn btn-block btn-outline-black mt-2 mb-2'>
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(true);
          }}
          className='btn btn-block btn-outline-danger mt-2 mb-2'>
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className='card text-black border-0 rounded-0  justify-content-center'>
      <ImageHelper product={product} />
      <div className='card-body border-top-0 border border-black'>
        {getRedirect(redirect)}
        <h5 className='card-title'>{cartTitle}</h5>
        <p className='card-text'>{cartDescription}</p>
        <p className='fw-bold'>{`Rs.${cartPrice}`}</p>
        <div>{showAddToCart(addtoCart)}</div>
        <div>{showRemoveFromCart(removeFromCart)}</div>
      </div>
    </div>

    // <div className='card'>
    //   <div className='card-header lead'>{cartTitle}</div>
    //   <div className='card-body'>
    //     {getRedirect(redirect)}
    //     <ImageHelper product={product} />
    //     <p className='lead bg-success font-weight-normal text-wrap'>
    //       {cartDescription}
    //     </p>
    //     <p className='btn btn-success rounded  btn-sm px-4'>
    //       {`Rs ${cartPrice}`}
    //     </p>
    //     <div className='row'>
    //       <div className='col-12'>{showAddToCart(addtoCart)}</div>
    //       <div className='col-12'>{showRemoveFromCart(removeFromCart)}</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
