import Base from "../core/Base";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = user;

  const handleChange = (name) => (event) => {
    setUser({ ...user, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setUser({ ...user, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setUser({ ...user, error: data.error, success: false });
        } else {
          setUser({
            ...user,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <form>
            <div className='form-group'>
              <label className='text-light'>Name</label>
              <input
                className='form-control'
                type='text'
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className='form-group'>
              <label className='text-light'>Email</label>
              <input
                className='form-control'
                type='email'
                onChange={handleChange("email")}
                value={email}
              />
            </div>

            <div className='form-group'>
              <label className='text-light'>Password</label>
              <input
                className='form-control'
                type='password'
                onChange={handleChange("password")}
                value={password}
              />
            </div>
            <div className='p-2'></div>
            <div className='text-center'>
              <button onClick={onSubmit} className='btn btn-success btn-block'>
                Submit
              </button>
              <p>{JSON.stringify(user)}</p>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className='alert alert-success'
        style={{
          display: success ? "" : "none",
        }}>
        New Account was created Successfully. Please{""}
        <Link to='/signin'>Login Here</Link>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className='alert alert-danger'
        style={{
          display: error ? "" : "none",
        }}>
        {error}
      </div>
    );
  };

  return (
    <Base title='Sign up page' description='A page for user to sign'>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
