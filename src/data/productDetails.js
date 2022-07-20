import { v4 as uuid } from "uuid";
import bookmark1 from "../images/bookmark1.jpg";
import bookmark2 from "../images/bookmark2.jpg";
import bookmark3 from "../images/bookmark3.jpg";
import bookmark4 from "../images/bookmark4.jpg";
import bookmark5 from "../images/bookmark5.jpg";
import bookmark6 from "../images/bookmark6.jpg";
import notebook1 from "../images/notebook.jpg";
import notebook2 from "../images/notebook2.jpg";
import notebook3 from "../images/notebook3.jpg";
import notebook4 from "../images/notebook4.jpg";
import notebook5 from "../images/notebook5.jpg";
import notebook6 from "../images/notebook6.jpg";
import notebook7 from "../images/notebook7.jpg";
import notebook8 from "../images/notebook8.jpg";
import notebook9 from "../images/notebook9.jpg";
import notebook10 from "../images/notebook10.jpg";
import notebook11 from "../images/notebook11.jpg";
import notebook12 from "../images/notebook12.jpg";
import notebook13 from "../images/notebook13.jpg";

const productDetails = [
  {
    id: uuid(),
    availablity: "In Stock",
    image: bookmark1,
    name: "Dreams Don't Work Unless You Do Bookmark",
    price: 199,
    originalPrice: 299,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Bookmark",
    type: "By Categories",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 3,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: bookmark2,
    name: "Your word is lamp to my feet Bookmark",
    price: 149,
    originalPrice: 199,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: bookmark3,
    name: "Midnight Blossom Bookmark",
    price: 249,
    originalPrice: 299,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 1,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: bookmark4,
    name: "Abstract Floral Bookmark",
    price: 149,
    originalPrice: 199,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 5,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: bookmark5,
    name: "Bookmark for Readers",
    price: 149,
    originalPrice: 199,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 4,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: bookmark6,
    name: "Peaceful Buddha Bookmark",
    price: 199,
    originalPrice: 299,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook1,
    name: "Genius Reusable Notebook",
    price: 499,
    originalPrice: 999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    type: "Best Seller",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 5,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook2,
    name: "Deathnote Reusable Notebook",
    price: 999,
    originalPrice: 1499,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    type: "By Categories",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: notebook3,
    name: "Sh*t Done Reusable Notebook",
    price: 499,
    originalPrice: 999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    type: "Best Seller",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook4,
    name: "Don't Stop Reusable Notebook",
    price: 1499,
    originalPrice: 1999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    type: "Best Seller",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 3,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook5,
    name: "F.R.I.E.N.D.S Reusable Notebook",
    price: 999,
    originalPrice: 1499,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 1,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: notebook6,
    name: "Never Give Up Reusable Notebook",
    price: 499,
    originalPrice: 999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 1,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook7,
    name: "Paanic Reusable Notebook",
    price: 499,
    originalPrice: 999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 5,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook8,
    name: "Wondering Woman Reusable Notebook",
    price: 499,
    originalPrice: 999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook9,
    name: "Basanti Reusable Notebook",
    price: 499,
    originalPrice: 999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 3,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook10,
    name: "Learn and Earn Reusable Notebook",
    price: 499,
    originalPrice: 999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 1,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook11,
    name: "Bhukkadh Reusable Notebook",
    price: 999,
    originalPrice: 1499,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 3,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook12,
    name: "Coffee Reusable Notebook",
    price: 499,
    originalPrice: 999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: notebook13,
    name: "Today I am Grateful Reusable Notebook",
    price: 1499,
    originalPrice: 1999,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 5,
    qty: 1
  }
];

export default productDetails;
