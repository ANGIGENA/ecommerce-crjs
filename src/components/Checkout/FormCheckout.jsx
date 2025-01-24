import React from "react";
import "./FormCheckout.css"

const FormCheckout = ({ dataForm, handleChangeInput, handleSumbitForm}) => {
  return (
    <div className="checkout-content">
      <form className="check-form" onSubmit={handleSumbitForm}>
        <h3 className="check-title">Checkout</h3>
        <label className="check-label">Nombre completo</label>
        <input className="check-input"
          type="text"
          value={dataForm.fullname}
          name="fullname"
          onChange={handleChangeInput}
        />

        <label className="check-label">Telefono</label>
        <input className="check-input"
          type="number"
          value={dataForm.phone}
          name="phone"
          onChange={handleChangeInput}
        />

        <label className="check-label">Email</label>
        <input className="check-input"
          type="email"
          value={dataForm.email}
          name="email"
          onChange={handleChangeInput}
        />

        <button className="check-btn" type="sumbit">Finalizar compra</button>
      </form>
    </div>
  );
};

export default FormCheckout;
