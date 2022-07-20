import { Slider } from "@material-ui/core";
import { useState } from "react";
import { useCart } from "./cart-context";
import RatingSlider from "./RatingSlider";

const FilterAsideNav = () => {
  const {
    productState: {
      byStock,
      priceRange,
      sort,
      byNotebook,
      byBookmark,
      byRating
    },
    productDispatch
  } = useCart();

  return (
    <div className="filter-nav">
      <p className="filter-heading">Filter</p>
      <button
        className="clear-btn button-design"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTER"
          })
        }
      >
        Clear Filters
      </button>

      <hr color="grey" size="1" />

      <div className="filter-option-container">
        {/* Categories */}
        <div className="filter-option">
          <p className="filter-option-heading">CATEGORIES</p>
          <label className="checkbox-container">
            Reusable Notebook
            <input
              type="checkbox"
              name="Notebook"
              value="Notebook"
              checked={byNotebook}
              onClick={() => productDispatch({ type: "FILTER_BY_NOTEBOOK" })}
            />
            <span className="checkmark"></span>
          </label>

          <label className="checkbox-container">
            Bookmarks
            <input
              type="checkbox"
              checked={byBookmark}
              onClick={() => productDispatch({ type: "FILTER_BY_BOOKMARK" })}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Include Out of Stock
            <input
              type="checkbox"
              onClick={() =>
                productDispatch({
                  type: "FILTER_BY_STOCK"
                })
              }
              checked={byStock}
            />
            <span className="checkmark"></span>
          </label>
        </div>

        <hr color="grey" size="1" />

        {/* Price */}

        <div className="filter-option">
          <p className="filter-option-heading">PRICE</p>

          <p className="priceRange">₹{priceRange || 2000}</p>

          <input
            type="range"
            value={priceRange}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_PRICE_RANGE",
                priceValue: e.target.value
              })
            }
            min="50"
            step="50"
            max="2000"
            name=""
            class="slider"
          />
        </div>

        <hr color="grey" size="1" />

        {/* Sortby */}
        <div className="filter-option">
          <p className="filter-option-heading">SORT BY</p>
          <label className="radio-container">
            Low to High
            <input
              type="radio"
              checked={sort === "lowToHigh" ? true : false}
              name="group1"
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh"
                })
              }
            />
            <span className="radiomark"></span>
          </label>
          <label className="radio-container">
            High to Low
            <input
              type="radio"
              name="group1"
              checked={sort === "highToLow" ? true : false}
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow"
                })
              }
            />
            <span className="radiomark"></span>
          </label>
        </div>

        <hr color="grey" size="1" />

        {/* Rating */}

        <div className="filter-option">
          <p className="filter-option-heading">RATING</p>

          <RatingSlider
            rating={byRating}
            onClick={(i) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1
              })
            }
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterAsideNav;
