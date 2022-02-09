import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import FeaturedVideos from "./FeaturedVideos";
import FeaturedInternships from "./FeaturedInternships";
import Locations from "./Locations";
import Categories from "./Categories";
import TopColleges from "./TopColleges";
import TopCompanies from "./TopCompanies";
import Industries from "./Industries";
import Skills from "./Skills";
import GetInTouch from "./GetInTouch";

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
      <Categories />
      <Skills />
      <GetInTouch />
      {/* <Category /> */}
      <TopColleges />
      <TopCompanies />
      <Footer />
    </>
  );
}

export default Home;
