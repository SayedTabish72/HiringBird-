import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import FeaturedVideos from "./FeaturedVideos";
import FeaturedInternships from "./FeaturedInternships";
import Locations from "./Locations";
import Category from "./Category";
import TopColleges from "./TopColleges";
import TopCompanies from "./TopCompanies";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedVideos />
      <FeaturedInternships />
      <Locations />
      <Category />
      <TopColleges />
      <TopCompanies />
      <Footer />
    </>
  );
}

export default Home;
