import Box1 from "./Box1/Box1";
import Box2 from "./Departments/Box2";
import Box3 from "./Box3/Box3";
import Cards from "./CreateAppointment/Cards";
import Heading from "./Heading/Heading";
import Navbar from "./Navbar/Navbar";

import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <Cards />
      <Box1 />
      <Box2 />
      <Box3 />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default Home;
