const StateTwo = (props) => {
  return (
    <section className="grid border-btn" id="detail-page">
      <h3 className="fs-400 font-clrs">Shipping Details</h3>
      <form className="grid center form-container">
        <div className="form-control grid">
          <label className="font-clrs mid-opacity" for="name">
            Full Name
          </label>
          <input
            type="text"
            className="border-btn fs-300 font-clrs"
            required
            id="name"
            name="name"
            placeholder="name"
          />
        </div>
        <div className="form-control grid">
          <label className="font-clrs mid-opacity" for="street">
            Street Name
          </label>
          <input
            type="text"
            className="border-btn fs-300 font-clrs"
            required
            id="street"
            name="street"
            placeholder="street name"
          />
        </div>
        <div className="form-control grid">
          <label className="font-clrs mid-opacity" for="house-number">
            House Number
          </label>
          <input
            type="text"
            className="border-btn fs-300 font-clrs"
            required
            id="house-number"
            name="house-number"
            placeholder="123"
          />
        </div>
        <div className="form-control grid">
          <label className="font-clrs mid-opacity" for="country">
            Country
          </label>
          <input
            type="text"
            className="border-btn fs-300 font-clrs"
            required
            id="country"
            name="country"
            placeholder="vietnam"
          />
        </div>
        <div className="form-control grid">
          <label className="font-clrs mid-opacity" for="zip-code">
            ZIP Code
          </label>
          <input
            type="number"
            className="border-btn fs-300 font-clrs"
            required
            id="zip-code"
            name="zip-code"
            placeholder="1000"
          />
        </div>
        <button
          className="btn primary-bg fs-300 width-btn"
          type="submit"
          onClick={() => props.CheckOutState("+")}
        >
          <strong>Continue</strong>
        </button>
      </form>
    </section>
  );
};

export default StateTwo;
