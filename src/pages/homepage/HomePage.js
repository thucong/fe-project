import ImageSlider from "../../components/home/carousel/ImageSlider";
import Header from "../../components/home/header/Header";
import Footer from "../../components/home/footer/Footer";
import ProductCard from "../../components/home/card/ProductCard";
import { getProducts } from "../../services/ProductService";
import styles from "./HomePage.module.css";
const HomePage = ({ products }) => {
  return (
    <div>
      <Header />
      <ImageSlider></ImageSlider>
      <div className={styles.card}>
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
      </div>
      <Footer />
    </div>
  );
};
export const getStaticProps = async () => {
  const products = await getProducts();
  //console.log(products);
  return {
    props: {
      products,
    },
  };
};
export default HomePage;
