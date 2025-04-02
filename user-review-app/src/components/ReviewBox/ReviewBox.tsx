import styles from "./review-box.module.css";

interface Review {
  text: string;
  author: string;
  avatar?: string;
}

interface ReviewBoxProps {
  review: Review;
}

export const ReviewBox = ({ review }: ReviewBoxProps) => {
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
      <h2 className={styles["review-author"]}>- {review.author}</h2>
    </div>
    <p className={styles["review-text"]}>"{review.text}"</p>
  </div>

  );
};
