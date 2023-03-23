import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
function ProductList() {
  const data = useSelector((state) => state.money.items);
  return (
    <div className="row">
      <div className="col-12 productList mb-3">
        {data.map((item, index) => {
          return (
            <ProductCard
              productIndex={index}
              productPhotoUrl={item.photoUrl}
              productName={item.name}
              productPay={item.pay}
              productCount={item.count}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
