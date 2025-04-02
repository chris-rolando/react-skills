import styles from "./review-box.module.css";

interface Review {
  text: string;
  author: string;
  avatar?: string; // New
}

interface ReviewBoxProps {
  review: Review;
}

export const ReviewBox = ({ review }: ReviewBoxProps) => {
  return (
    <>
      <div className={styles["review-container"]}>
        {review.avatar && (
          <img
            src={review.avatar}
            alt={`Avatar de ${review.author}`}
            className={styles["review-avatar"]}
          />
        )}

        <p className={styles["review-text"]}>"{review.text}"</p>
        <h2 className={styles["review-author"]}>- {review.author}</h2>
      </div>
    </>
  );
};

ReviewBox.defaultProps = {
  styleOverride: "",
};
