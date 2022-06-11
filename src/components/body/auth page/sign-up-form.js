import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <>
      <SecondaryText text="Sign Up" />
      <Title title="Create Account" />
      <section className="grid center form-container">
        <div className="form-control grid">
          <label className="font-clrs mid-opacity">Email Address</label>
          <input type="text" className="border-btn" required />
        </div>
        <div className="form-control grid">
          <label className="font-clrs mid-opacity">Create Password</label>
          <input type="password" className="border-btn" required />
        </div>
        <button className="btn primary-bg fs-300 width-btn">
          <Link to="/product" className="font-clrs">
            <strong>Create Account</strong>
          </Link>
        </button>
        <Link className="font-clrs fs-300" to="/auth/register">
          <strong>Login</strong>
        </Link>
      </section>
    </>
  );
};

export default SignUpForm;
