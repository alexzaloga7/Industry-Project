import "./PaymentInfo.scss";

function PaymentInfo() {
  return (
    <div className="Payment-Info">
      <section className="Payment-Info__box">
        <div className="Payment-Info__textbox">
          <h2 className="Payment-Info__bold">Payments & Credits</h2>
          <h2 className="Payment-Info__bold">Previous Charges & Adjustments</h2>
          <h2 className="Payment-Info__bold">New Charges & Adjustments</h2>
          <h2 className="Payment-Info__regular">Check Spending Power</h2>
        </div>
      </section>
      <section className="Payment-Info__boxtwo">
        <h2 className="Payment-Info__amount">Amount due is on</h2>
        <h2 className="Payment-Info__large">15 May</h2>
        <div className="Payment-Info__button-container">
          <button className="Payment-Info__button">Make Payment</button>
        </div>
      </section>
    </div>
  );
}

export default PaymentInfo;
