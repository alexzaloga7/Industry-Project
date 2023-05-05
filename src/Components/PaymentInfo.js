import "./PaymentInfo.scss";

function PaymentInfo() {
  return (
    <div className="Payment-Info">
      <section className="Payment-Info__box">
        <div className="Payment-Info__textbox">
          <h2 className="Payment-Info__bold">
            Payments & Credits
            <p className="Payment-Info__number--large">$439.82</p>
          </h2>

          <h2 className="Payment-Info__bold">
            Previous Charges & Adjustments
            <p className="Payment-Info__number">$154.33</p>
          </h2>

          <h2 className="Payment-Info__bold">
            New Charges & Adjustments
            <p className="Payment-Info__number">$727.16</p>
          </h2>

          <h2 className="Payment-Info__regular">Check Spending Power</h2>
        </div>
      </section>
      <section className="Payment-Info__boxtwo">
        <h2 className="Payment-Info__amount">Amount due is on</h2>
        <h2 className="Payment-Info__large">May 15th, 2023</h2>
        <p className="Payment-Info__due">$1,430.82</p>
        <div className="Payment-Info__button-container">
          <button className="Payment-Info__button">Make Payment</button>
        </div>
        <button className="Payment-Info__button--feedback">
          Give Feedback
        </button>
        <button className="Payment-Info__button--chat">
          <span className="material-symbols-outlined">forum</span>
        </button>
      </section>
    </div>
  );
}

export default PaymentInfo;
