import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import InternshipCollection from "./InternshipCollection";
import FeaturedInternships from "./FeaturedInternships";
import Locations from "./Locations";
import Categories from "./Categories";
import TopColleges from "./TopColleges";
import TopCompanies from "./TopCompanies";
import Fields from "./Fields";
import Skills from "./Skills";
import GetInTouch from "./GetInTouch";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <InternshipCollection />
      <FeaturedInternships />
      <Fields />
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
