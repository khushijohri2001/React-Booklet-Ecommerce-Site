import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import data from "../data/data";
import "../css/Slider.css";

const Slider = () => {
  const [productDetail] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = productDetail.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, productDetail]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {productDetail.map((item, indexProduct) => {
          const { id, image, name } = item;
          let position = "nextSlide";
          if (indexProduct === index) {
            position = "activeSlide";
          }
          if (
            indexProduct === index - 1 ||
            (index === 0 && indexProduct === productDetail.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="item-img" />
              <h4>{name}</h4>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <ArrowLeftOutlined />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <ArrowRightOutlined />
        </button>
      </div>
    </section>
  );
};
export default Slider;
