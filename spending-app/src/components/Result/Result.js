import React from "react";
import { useSelector } from "react-redux";
function Result() {
  const data = useSelector((state) => state.money.items);
  const filtered = data.filter((item) => item.count > 0);
  let totalPrice = 0;
  filtered.forEach((element) => {
    totalPrice += element.count * element.pay;
  });
  console.log(filtered);
  return (
    <div
      className={`row d-flex justify-content-center mb-5  ${
        filtered.length > 0 ? "" : "d-none"
      }`}
    >
      <div className="col-6 bg-white mt-4">
        {filtered.map((item) => {
          return (
            <div className="d-flex justify-content-between mt-3 align-items-center">
              <img src={item.photoUrl} className="resultPhoto" alt="" />
              <p>X{item.count} Adet</p>
              <p>{item.name}</p>
              <p>
                {item.count} x {item.pay} ₺ ={" "}
                <span className="fw-bold">{item.count * item.pay} ₺</span>
              </p>
            </div>
          );
        })}
        <hr />
        <p className="d-flex justify-content-between fw-bold">
          <span> Toplam:</span> <span> {totalPrice} ₺</span>
        </p>
      </div>
    </div>
  );
}

export default Result;
