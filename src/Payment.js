import "./Payment.css";

export default function Payment() {
  return (
    <div className="payment-container">
      <h1>OnlineStore</h1>
      <form>
        <div>
          <label htmlFor="paymentMethods">Payment Method</label>
          <select name="paymentMethods" required>
            <option selected disabled>
              Choose one of the options
            </option>
            <option value="paypal">PayPal Cash Card</option>
            <option value="visa">International Visa Card</option>
          </select>
        </div>

        <div>
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="tel"
            id="cardNumber"
            name="cardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
            pattern="\d{4} \d{4} \d{4} \d{4}"
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
          />
        </div>

        <div>
          <label htmlFor="countryOptions">Deliver to</label>
          <select name="countryOptions" required>
            <option selected disabled>
              Choose your country
            </option>
            <option value="br">Brazil</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="angola">Angola</option>
          </select>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
