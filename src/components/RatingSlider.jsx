import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingSlider = (props) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => props.onClick(i)} style={props.style}>
          {props.rating > i ? (
            <AiFillStar className="star" />
          ) : (
            <AiOutlineStar className="star" />
          )}
        </span>
      ))}
    </>
  );
};

export default RatingSlider;
