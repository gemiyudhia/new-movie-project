import HomeSection from "../components/Fragment/HomeSection";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <section className="lg:mt-32 mt-28">
      <Slider />
      <HomeSection />
    </section>
  );
};

export default Home;
