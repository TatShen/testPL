import { Product } from "@/Services/ProductsServices"
import Button from "../Button/Button"
import style from "./Card.module.css"
import StarRating from "../StarRating/StarRating"

interface ICardProps {
    product: Product
}
const Card:React.FC<ICardProps> = ({product}) => {
return <div className={product.active ? style.card : style.unavailable}>
    <div className={style.image}   style={{ backgroundImage: `url(${product.image})` }}>
        {product.promotion && <div className={style.promo}>Promo</div>}
    </div>
    <div className={style.content}>
      <p className={style.name}>{product.name}</p>
      <span className={style.description}>{product.description}</span>
      <StarRating rating={Number(product.rating)}/>
      <Button type="button" title={product.active ? "Show details" :"Unavailable"} disabled={!product.active} className={style.button}/>
    </div>
    
</div>
}

export default Card