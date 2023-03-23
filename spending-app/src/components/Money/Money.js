import React from "react";
import { useSelector } from "react-redux";
function Money() {
  const remainingMoney = useSelector((state) => state.money.amount);
  return (
    <>
      <div className="row mt-4 bg-white py-3">
        <div className="col-12 text-center">
          <img
            src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
            alt=""
            className="photo"
          />
          <h2 className="text-center">Spend Bill Gates Money</h2>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 bg-success py-3 fs-4 fw-bold text-white text-center">
          Kalan Para : {remainingMoney} ₺
        </div>
      </div>
    </>
  );
}

export default Money;
