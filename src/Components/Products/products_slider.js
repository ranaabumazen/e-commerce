import axios from "axios";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Product from "../Product";
const baseURL = "https://fakestoreapi.com/products";

const ProductsSlider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, [products]);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider ref={props.setSliderRef} {...sliderSettings}>
      {products.map((product) => (
        <Product key={product.id} {...product} className={styles.slide} />
      ))}
    </Slider>
  );
};
export default ProductsSlider;
