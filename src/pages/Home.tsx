import React from "react";
import MyStories from "../components/home-page-components/stories/stories-carousel";
import WhatsNew from "../components/home-page-components/what's-new/what's-new";
import MyNavbar from "../components/mutual-components/navbar/navbar";
import MyFooter from "../components/mutual-components/footer/footer";
import SpinneysFood from "../components/home-page-components/spinneysfood/spinneysfood";



const Home = () => {
  return (
    <div className="Home">
      <MyNavbar />
      <MyStories />
      <WhatsNew />
      <SpinneysFood />
      <MyFooter />    
    </div>

  )
}
export default Home;