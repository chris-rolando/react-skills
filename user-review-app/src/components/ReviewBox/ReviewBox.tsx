import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from "./review-box.module.css";

interface Review {
  text: string;
  author: string;
  avatar?: string;
  rating?: number;
}

interface ReviewBoxProps {
  review: Review;
}

const generateStars = (rating: number | undefined) => {
  return Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={index < (rating ?? 0) ? styles["star-filled"] : styles["star-empty"]}
    />
  ));
};

export const ReviewBox = ({ review }: ReviewBoxProps) => {
  const stars = generateStars(review.rating);

  return (
    <div className={styles["review-container"]}>
      <div className={styles["review-header"]}>
        {review.avatar && (
          <img
            src={review.avatar}
            alt={`Avatar de ${review.author}`}
            className={styles["review-avatar"]}
          />
        )}
        <h2 className={styles["review-author"]}>{review.author}</h2>
      </div>
      <div className={styles["review-rating"]}>{stars}</div>
      <p className={styles["review-text"]}>"{review.text}"</p>
    </div>
  );
};
