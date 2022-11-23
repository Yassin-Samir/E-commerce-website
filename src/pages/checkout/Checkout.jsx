import { useSelector } from "react-redux";
import style from "../../css/checkout.module.css";
import { Fragment, memo } from "react";
import Product from "./product";
function Checkout() {
  const { cart, total } = useSelector((state) => state);
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
export default memo(Checkout);
