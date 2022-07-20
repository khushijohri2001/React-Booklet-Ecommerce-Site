import { ArrowForward, ArrowRight } from "@material-ui/icons";
import { Link } from "react-router-dom";
import BestSeller from "./BestSeller";
import ByCategories from "./ByCategories";
import Slider from "./Slider";

const HomePageBody = () => {
  return (
    <div>
      <Slider />
      <Link to="all-products">
        <button className="show-now-btn">
          {" "}
          <span>Shop Now</span> <ArrowForward className="arrow-forward" />{" "}
        </button>
      </Link>
      <BestSeller />
      <ByCategories />
    </div>
  );
};

export default HomePageBody;
