import classNames from "classnames";
import style from "./StarRating.module.css";
import Star from "../../../public/icons/star.svg";

type StarRatingProps = {
  hidden?: string;
  rating: number;
  className?: string;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, hidden }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        className={classNames({
          [style.active]: i < rating / 2,
          [style.inactive]: i >= rating / 2,
        })}
      />
    );
  }
  return <div className={style.container}>{stars}</div>;
};

export default StarRating;
