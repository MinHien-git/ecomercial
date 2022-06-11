const StateFour = (props) => {
  return (
    <section className="grid border-btn" id="detail-page">
      <h3 className="fs-400 font-clrs">Payment Details</h3>
      <form className="grid center form-container">
        <div className="form-control grid">
          <div className="flex" id="payment">
            <div className="flex">
              <input
                type="radio"
                className="border-btn fs-300 font-clrs"
                required
                id="card"
                name="payment"
                value="creditCard"
              />
              <label className="font-clrs mid-opacity" for="card">
                Credit Card
              </label>
            </div>
            <div className="flex">
              <input
                type="radio"
                className="border-btn fs-300 font-clrs"
                required
                id="PayPal"
                name="payment"
                value="PayPal"
              />
              <label className="font-clrs mid-opacity" for="PayPal">
                PayPal
              </label>
            </div>
          </div>
        </div>
        <div className="form-control grid">
          <label className="font-clrs mid-opacity" for="house-number">
            Card Number
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
            Expired Date
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
            CVV
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
          <strong>Place Order</strong>
        </button>
      </form>
    </section>
  );
};

export default StateFour;
