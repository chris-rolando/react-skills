import styles from "./review-box.module.css";

interface Review {
  text: string;
  author: string;
}

interface ReviewBoxProps {
  review: Review;
}

export const ReviewBox = ({ review }: ReviewBoxProps) => {
  return (
    <>
      <div className={styles["review-container"]}>
        <p className={styles["review-text"]}>"{review.text}"</p>
        <h2 className={styles["review-author"]}>- {review.author}</h2>
      </div>
    </>
  );
};

ReviewBox.defaultProps = {
  styleOverride: "",
};
