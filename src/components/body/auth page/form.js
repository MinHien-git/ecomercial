import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import actionType from "../../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import authSelector from "../../../store/selectors/authSelector";

const Form = () => {
  const [user, SetUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const onLogin = useSelector(authSelector.selectIsloading.isLogined);

  const onChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(actionType.userLoginFetch(user));
    console.log(onLogin);
  };

  return (
    <>
      {onLogin ? <Navigate to="/auth/profile" /> : null}
      <section className="grid">
        <SecondaryText text="Login" />
        <Title title="Login to Your Account" />
        <form className="grid center form-container" onSubmit={onSubmit}>
          <div className="form-control grid">
            <label className="font-clrs mid-opacity" for="email">
              Your Email
            </label>
            <input
              type="email"
              className="border-btn fs-300 font-clrs"
              required
              id="email"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="form-control grid">
            <label className="font-clrs mid-opacity" for="password">
              Your Password
            </label>
            <input
              type="password"
              className="border-btn fs-300 font-clrs"
              required
              id="password"
              name="password"
              onChange={onChange}
            />
          </div>
          <button className="btn primary-bg fs-300 width-btn" type="submit">
            <strong>Login</strong>
          </button>
          <div className="flex-column responsive-flex">
            <Link className="font-clrs fs-300" to="/auth/register">
              <strong>Create Account</strong>
            </Link>
            <Link className="font-clrs under-line low-opacity" to="/auth/token">
              Forgot password?
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
