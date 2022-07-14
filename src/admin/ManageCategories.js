import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import { getCategories } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Base title='Manage Categories' description='Welcome to Manage Categories'>
      <div>
        <h2 className='mb-4'>All categories:</h2>
        <Link className='btn border' to={`/admin/dashboard`}>
          <span className='fw-bold'>Admin Home</span>
        </Link>

        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center text-white my-3'>
              Total {categories.length} Categories
            </h2>

            {categories.map((category, index) => {
              return (
                <div key={index} className='row text-center mb-2 border p-2 '>
                  <div className='col-4'>
                    <h3 className='text-black  text-left'>{category.name}</h3>
                  </div>
                  <div className='col-4'>
                    <Link
                      className='btn btn-success'
                      to={`/admin/category/update/${category._id}`}>
                      <span className=''>Update</span>
                    </Link>
                  </div>
                  <div className='col-4'>
                    <button className='btn btn-danger'>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
