import Green from "../assets/1.jpg";
import Pink from "../assets/2.jpg";
import White from "../assets/3.jpg";
import LightBlue from "../assets/4.jpg";
import DarkBlue from "../assets/5.jpg";
import Grey from "../assets/6.jpg";
import Red from "../assets/7.jpg";
import LightBlue1 from "../assets/8.jpg";
import { add } from "../redux/store";
import { useDispatch } from "react-redux";
import style from "../css/products.module.css";
function Product({ hoodieImage, index }) {
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch(
      add({
        index,
      })
    );
  };
  return (
    <div className={style.product}>
      <div className={style.img}>
        <img src={hoodieImage} />
      </div>
      <div className={style.text}>
        <p className={style.head}>Premium 1/4 Micro fleet jacket</p>
        <p className={style.price}>
          Excl . Tax: <span className={style.priceTag}>16.88</span>
        </p>
        <p className={style.price}>
          Incl . Tax: <span className={style.priceTag}>18.88</span>
        </p>
        <button onClick={AddToCart}>add to cart</button>
      </div>
    </div>
  );
}
function Products() {
  const arr = [
    { hoodieImage: Green, index: 0 },
    { hoodieImage: Pink, index: 1 },
    { hoodieImage: White, index: 2 },
    { hoodieImage: LightBlue, index: 3 },
    { hoodieImage: DarkBlue, index: 4 },
    { hoodieImage: Grey, index: 5 },
    { hoodieImage: Red, index: 6 },
    { hoodieImage: LightBlue1, index: 7 },
  ];
  return (
    <main className={style.products}>
      {arr.map((i, ind) => (
        <Product {...i} key={ind + 1} />
      ))}
    </main>
  );
}
export default Products;
