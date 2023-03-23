import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyProduct,
  sellProduct,
  incrementCount,
  decrementCount,
} from "../../redux/money/moneySlice";

function ProductCard({
  productName,
  productPhotoUrl,
  productPay,
  productCount,
  productIndex,
}) {
  const dispatch = useDispatch();
  const remainingMoney = useSelector((state) => state.money.amount);
  const sellClick = (item, index) => {
    dispatch(sellProduct(item));
    dispatch(decrementCount(index));
  };
  const buyClick = (item, index) => {
    if (item > remainingMoney) {
    } else {
      dispatch(buyProduct(item));
      dispatch(incrementCount(index));
    }
  };

  return (
    <div className="col-12 col-md-4 mt-2">
      <div className="card" style={{ width: "25rem" }}>
        <img
          src={productPhotoUrl}
          className="card-img-top carPhoto"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title text-center">{productName}</h3> <br />
          <br />
          <p className="text-center fs-5">{productPay} ₺</p>
          <div className="d-flex justify-content-between pt-3">
            <button
              onClick={() => sellClick(productPay, productIndex)}
              className={`btn btn-danger fw-bold text-light px-5 ${
                productCount === 0 ? "disabled" : ""
              }`}
            >
              Sell
            </button>
            <p className="fs-5 pt-2">{productCount}</p>
            <button
              onClick={() => buyClick(productPay, productIndex)}
              className={`btn btn-success fw-bold px-5 ${
                productPay > remainingMoney ? "disabled" : ""
              }`}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
