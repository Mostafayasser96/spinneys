import React from "react";
import MyStories from "../components/home-page-components/stories/stories-carousel";
import MyNavbar from "../components/mutual-components/navbar/navbar";



const Home = () => {
  return (
    <div className="Home">
      <MyNavbar />
      <MyStories />
    </div>

  )
}
export default Home;