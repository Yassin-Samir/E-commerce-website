import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import style from "../../css/checkout.module.css";
import { add, remove } from "../../redux/store";
const Product = ({ hoodieImage, hoodieType, price, quantity, index }) => {
  const dispatch = useDispatch();
  const decrease = useCallback(() => {
    dispatch(
      remove({
        index,
      })
    );
  }, [index]);
  const increase = useCallback(() => {
    dispatch(
      add({
        index,
      })
    );
  }, [index]);
  return (
    <div className={style.product}>
      <div className={style.img}>
        <img src={hoodieImage} alt="" />
      </div>
      <p className={style.HoodieType}>{hoodieType}</p>
      <p className={style.quantity}>{quantity}</p>
      <p className={style.HoodiePrice}>${price}</p>
      <div>
        <button onClick={increase} className={style.increaseBtn}>
          +
        </button>
        <button onClick={decrease} className={style.decreaseBtn}>
          -
        </button>
      </div>
    </div>
  );
};

export default memo(Product);
