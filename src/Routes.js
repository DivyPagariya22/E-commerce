import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import RequireAuth from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import ManageCategories from "./admin/ManageCategories";
import UpdateCategory from "./admin/Updatecategory";
import Cart from "./core/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route
          path='/admin/dashboard'
          element={
            <RequireAuth redirectTo='/signin'>
              <AdminDashBoard />
            </RequireAuth>
          }
        />
        <Route
          path='/admin/create/category'
          element={
            <RequireAuth redirectTo='/signin'>
              <AddCategory />
            </RequireAuth>
          }
        />
        <Route
          path='admin/categories'
          element={
            <RequireAuth redirectTo='/signin'>
              <ManageCategories />
            </RequireAuth>
          }
        />
        <Route
          path='/admin/category/update/:categoryId'
          element={
            <RequireAuth redirectTo='/signin'>
              <UpdateCategory />
            </RequireAuth>
          }
        />

        <Route
          path='/admin/create/product'
          element={
            <RequireAuth redirectTo='/signin'>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path='/admin/products'
          element={
            <RequireAuth redirectTo='/signin'>
              <ManageProducts />
            </RequireAuth>
          }
        />
        <Route
          path='/admin/product/update/:productId'
          element={
            <RequireAuth redirectTo='/signin'>
              <UpdateProduct />
            </RequireAuth>
          }
        />
        <Route
          path='/cart'
          element={
            <RequireAuth redirectTo='/signin'>
              <Cart />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
