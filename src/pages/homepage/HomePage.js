import ImageSlider from "../../components/home/carousel/ImageSlider";
import Header from "../../components/home/header/Header";
import Footer from "../../components/home/footer/Footer";
import ProductCard from "../../components/home/card/ProductCard";
import { getProducts } from "../../services/ProductService";
import { getLabels } from "../../services/labelService";
import styles from "./HomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  LeftOutlined,
  RightOutlined,
 
} from "@ant-design/icons";
import { useRef } from "react";

const HomePage = ({ products, labels }) => {
   let settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
   };
   const sliderRef = useRef(null);
  return (
    <div className={styles.container}>
      <Header />
      <ImageSlider></ImageSlider>
      <div className={styles.list_label}>
        {labels.map((label) => (
          <div key={label._id} className={styles.labels}>
            {label.labelName}
          </div>
        ))}
      </div>
      <div className={styles.product}>
        <h1 className={styles.h1}>PRODUCT</h1>
        <div className={styles.control}>
          <div className={styles.arrow} onClick={() => sliderRef.current.slickPrev()}><LeftOutlined /></div>
          <div className={styles.arrow}  onClick={() => sliderRef.current.slickNext()}><RightOutlined /></div>
        </div>
      </div>
      <Slider {...settings} className={styles.list} ref={sliderRef}>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            productName={product.productName}
            price={product.price}
            description={product.description}
            labels={product.label}
            image={product.productThumbnail}
          />
        ))}
      </Slider>
      <Footer />
    </div>
  );
};
export const getStaticProps = async () => {
  const products = await getProducts();
  const labels = await getLabels();
  return {
    props: {
      products,
      labels,
    },
  };
};
export default HomePage;
