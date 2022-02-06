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
import Industries from "./Industries";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedVideos />
      <FeaturedInternships />
      <Industries />
      <Locations />
      {/* <Category /> */}
      <TopColleges />
      <TopCompanies />
      <Footer />
    </>
  );
}

export default Home;
