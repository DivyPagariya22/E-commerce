import { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import Menu from "./Menu";
import myImage from "../../src/logo3.jpg";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <div>
      <Menu></Menu>
      <div class='row align-items-center py-5'>
        <div class='col-md-6 text-white text-center'>
          <h1
            class='center text-black font-weight-bold'
            style={{ fontSize: "50px", color: "white" }}>
            Shubham Clothes
          </h1>
          <p className='text-black'>Get the best merches here</p>
        </div>
        <div class='col-md-6'>
          <img src={myImage} alt='About Hero' class='img-fluid w-100' />
        </div>
      </div>
      <div className='container-fluid m-2'>
        <div className='row text-center'>
          <div className='row'>
            {products.map((product, index) => {
              return (
                <div className='col-3 mb-4'>
                  <Card product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    // <div>
    //
    //   <div className='mb-4 row'>
    //     <div className='col-6'></div>
    //     <div className='col-6'>
    //       <img className='img-fluid w-100' src={myImage} style={{}} />
    //     </div>
    //   </div>
    //   <div className='row text-center'>
    //     <div className='row'>
    //       {products.map((product, index) => {
    //         return (
    //           <div className='col-3 mb-4'>
    //             <Card product={product} />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}
