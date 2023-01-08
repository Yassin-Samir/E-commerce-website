import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import style from "../../css/checkout.module.css";
import { Fragment } from "react";
import Product from "./product";
const selector = createSelector(
  (state) => ({
    cart: state.cart,
    total: state.total,
  }),
  (output) => output
);
function Checkout() {
  const { cart, total } = useSelector(selector);
  return (
    <Fragment>
      <div className={style.productFather}>
        {cart.length ? (
          cart.map((i, ind) => <Product {...i} key={ind + 1} />)
        ) : (
          <p className={style.Noitems}>No Items have been added to cart</p>
        )}
      </div>
      <p className={style.total}>Total:${total ? total : 0}</p>
    </Fragment>
  );
}
export default Checkout;
