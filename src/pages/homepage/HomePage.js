import ImageSlider from "../../components/home/carousel/ImageSlider";
import Header from "../../components/home/header/Header";
import Footer from "../../components/home/footer/Footer";
import ProductCard from "../../components/home/card/ProductCard";
import { getProducts } from "../../services/ProductService";
import { getLabels } from "../../services/labelService";
import styles from "./HomePage.module.css";
const HomePage = ({ products, labels }) => {
  return (
    <div className={styles.container}>
      <Header />
      <ImageSlider></ImageSlider>
      <div>
        {labels.map((label) => (
          <div key={label._id} className={styles.labels}>
            {label.labelName}
          </div>
        ))}
      </div>
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
  const labels = await getLabels();
  return {
    props: {
      products,
      labels,
    },
  };
};
export default HomePage;
