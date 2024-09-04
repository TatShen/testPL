import { Product } from "@/Services/ProductsServices";
import Button from "../Button/Button";
import style from "./Card.module.css";
import StarRating from "../StarRating/StarRating";

interface ICardProps {
  product: Product;
}
const Card: React.FC<ICardProps> = ({ product }) => {
  const imageClass = `${style.image} ${product.active ? "" : style.unavailable}`;
  const contentClass = `${style.content} ${product.active ? "" : style.unavailable}`;
  return (
    <div className={style.card}>
      <div
        className={imageClass}
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {product.promotion && <div className={style.promo}>Promo</div>}
      </div>
      <div className={contentClass}>
        <p className={style.name}>{product.name}</p>
        <span className={style.description}>{product.description}</span>
      </div>
      <StarRating rating={Number(product.rating)} />
        <Button
          type="button"
          title={product.active ? "Show details" : "Unavailable"}
          disabled={!product.active}
          className={style.button}
        />
    </div>
  );
};

export default Card;
