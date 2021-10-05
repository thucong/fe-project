import ImageSlider from "../../components/home/carousel/ImageSlider";
import Header from "../../components/home/header/Header";
import Footer from "../../components/home/footer/Footer";
import ProductCard from "../../components/home/card/ProductCard";
import { getProducts } from "../../services/ProductService";
import styles from "./HomePage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePage = ({ products }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
  };
  return (
    <div>
      <Header />
      <ImageSlider></ImageSlider>
      <div className={styles.product}>
        <h1 className={styles.h1}>PRODUCT</h1>
      </div>
      <Slider {...settings} className={styles.list}>
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
  return {
    props: {
      products,
    },
  };
};
export default HomePage;
