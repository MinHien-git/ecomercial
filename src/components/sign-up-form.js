import SecondaryText from "./secondary-text";
import Title from "./section-title";

const SignUpForm = () => {
  return (
    <section className="grid">
      <SecondaryText text="Our Newsletter" center={true} />
      <Title title="Sign Up to our Newsletter" center={true} />
      <form className="grid sign-up-form">
        <input
          type="text"
          className="sign-in-input fs-300 font-clrs"
          placeholder="Your Email"
        />
        <button className="btn primary-bg fs-300 priamry-btn">
          <strong>Sign Up</strong>
        </button>
      </form>
    </section>
  );
};

export default SignUpForm;
