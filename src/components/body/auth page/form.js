import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Form = () => {
  const OnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section className="grid">
      <SecondaryText text="Login" />
      <Title title="Login to Your Account" />
      <form className="grid center form-container" onSubmit={OnSubmit}>
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
  );
};

export default Form;
