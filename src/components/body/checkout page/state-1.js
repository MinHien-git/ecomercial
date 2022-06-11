const StateOne = (props) => {
  return (
    <section className="grid border-btn" id="detail-page">
      <h3 className="fs-400 font-clrs">Details</h3>
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
        <button
          className="btn primary-bg fs-300 width-btn"
          type="submit"
          onClick={() => props.CheckOutState("+")}
        >
          <strong>Continue</strong>
        </button>
        <button
          className="font-clrs fs-300 btn border-btn width-btn"
          style={{ backgroundColor: "transparent" }}
          onClick={() => props.CheckOutState("+")}
        >
          <strong>Guest Checkout</strong>
        </button>
      </form>
    </section>
  );
};

export default StateOne;
