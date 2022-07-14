import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, roles },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className='card'>
        <h4 className='card-header bg-dark text-white'>Admin Navigation</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link text-info' to='/admin/create/category'>
              Create Category
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link text-info' to='/admin/categories'>
              Manage Category
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link text-info' to='/admin/create/product'>
              Create Product
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link text-info' to='/admin/products'>
              Manage Products
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link text-info' to='/admin/orders'>
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className='card mb-3'>
        <h4 className='card-header'>Admin Information</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <span className='badge badge-success mr-2 text-black'>Name:</span>{" "}
            {name}
          </li>
          <li className='list-group-item'>
            <span className='badge badge-success mr-2 text-black'>Email:</span>{" "}
            {email}
          </li>

          <li className='list-group-item'>
            <span className='badge badge-danger text-black bg-success'>
              Admin Area
            </span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title='Welcome to Admin area'
      description='Manage all of Your Products here'
      className='container bg-info bg-opacity-50 p-3'>
      <div className='row'>
        <div className='col-3'>{adminLeftSide()}</div>
        <div className='col-9'>{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
