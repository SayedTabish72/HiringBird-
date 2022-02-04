import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import FeaturedVideos from "./FeaturedVideos";
import FeaturedInternships from "./FeaturedInternships";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedVideos />
      <FeaturedInternships />
      <Footer />
    </>
  );
}

export default Home;
