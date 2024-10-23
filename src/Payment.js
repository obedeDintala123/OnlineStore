import "./Payment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Estado para controlar o loader
  const userLoginEmail = localStorage.getItem('userLoginEmail');
  const userSignUpEmail = localStorage.getItem('userSignUpEmail');

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true); // Mostra o loader ao iniciar o envio

    fetch("http://localhost/BackEnd-OnlineStore/api/email.php", {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({userLoginEmail: userLoginEmail, userSignUpEmail: userSignUpEmail})
    })
    .then((response) => {
      if(!response.ok){
        throw new Error("Erro no servidor");
      }
      return response.json();
    })
    .then((data) => {
      setLoading(false); // Esconde o loader após o envio ser concluído
      data.message === "success" ? navigate('/email-send') : window.alert("Error providing data. Try again later!");
    })
    .catch((error) => {
      setLoading(false); // Esconde o loader caso ocorra erro
      console.error('Error sending email: ' + error);
    });
  }

  return (
    <div className="payment-container">
      <h1>OnlineStore</h1>

      {loading && <div className="loader"></div>} {/* Loader aparece durante o processamento */}

      <form method="post" onSubmit={handlePayment}>
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
            placeholder="xxxx-xxxx-xxxx-xxxx"
            pattern="\d{4}-\d{4}-\d{4}-\d{4}"
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

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Send"}
        </button>
      </form>
    </div>
  );
}
