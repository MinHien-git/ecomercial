import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import { Link } from "react-router-dom";

const Form = () => {
  const OnSubmit = () => {};

  return (
    <section className="grid">
      <SecondaryText text="Login" />
      <Title title="Login to Your Account" />
      <form className="grid center form-container">
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
          />
        </div>
        <button className="btn primary-bg fs-300 width-btn" type="submit">
          <strong>Login</strong>
        </button>
        <Link className="font-clrs fs-300" to="/auth/register">
          <strong>Create Account</strong>
        </Link>
        <Link className="font-clrs under-line" to="/auth/token">
          Forgot password
        </Link>
      </form>
    </section>
  );
};

export default Form;
