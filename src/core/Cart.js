import { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
import StripeCheckout from "./StripeCheckout";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProduct = () => {
    return (
      <div>
        <h2>This Section is Load Product</h2>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              removeFromCart={true}
              addtoCart={false}
              setReload={setReload}
              reload={reload}
            />
          );
        })}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        <h2>This Section is for checkout</h2>
      </div>
    );
  };

  return (
    <Base title='Cart Page' description='Ready to Check out'>
      <div className='row text-center text-black'>
        <div className='col-6'>{loadAllProduct()}</div>
        <div className='col-6'>
          <StripeCheckout products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
}
