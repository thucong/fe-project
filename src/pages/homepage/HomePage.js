import Footer from "../../components/home/footer/Footer";
import ImageSlider from "../../components/home/carousel/ImageSlider";
import Header from "../../components/home/header/Header";
import ProductCard from "../../components/home/card/ProductCard";
import product1 from "../../img/testProduct.jpg";
const HomePage = () => {
  return (
    <div>
      <Header />
      <ImageSlider></ImageSlider>
      <ProductCard
        productName="Vegetable"
        price="$500"
        description="We use proprietary AI to analyze the competition for your topic, and to help you create optimized content faster with state of the art AI generation."
        labels={["fresh", "vegetable", "frozen"]}
        images={product1}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
