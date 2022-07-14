import React from "react";
import Menu from "./Menu";
import myImage from "../../src/b_image1.jpg";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "text-white p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className='container-fluid'>
      <div className='text-center border-top border-dark'>
        <h2 className='title'>{title}</h2>

        <div className='border-dark'>
          <div className={className}>{children}</div>
        </div>
      </div>

      <footer className='footer mt-auto py-3 text-black border-top border-dark'>
        <div className='container-fluid text-center py-2'>
          <h4>If you got any questions, feel free to reach out!</h4>
          <button className='btn btn-warning btn-lg'>Contact Us</button>
        </div>
      </footer>
    </div>
  </div>
);

export default Base;
