import React from "react";
import Hero from "./homeComponents/Hero";
import Offers from "./homeComponents/Offers";
import Bestseller from "./homeComponents/Bestseller";
import Shopthelook from "./homeComponents/Shopthelook.jsx";
import DealOfTheWee from "./homeComponents/DealOfTheWee.jsx";
import WhyUgao from "./homeComponents/WhyUgao.jsx";
import Youtube from "./homeComponents/Youtube.jsx";
import Bestpick from "./homeComponents/Bestpick.jsx";
// import Review from './homeComponents/Review.jsx'
import PlantSubscription from "./homeComponents/PlantSubscription.jsx";
import About from "./homeComponents/About.jsx";
import CategoryList from "./homeComponent02/CategoryList.jsx";
import HorizontalCardProduct from "./homeComponent02/HorizontalCardProduct.jsx";
// import DealOfTheWeek from './homeComponents/DealOfTheWee.jsx'


function Home() {
  return (
    <div>
      <CategoryList/>
      <Hero />
      {/* <Offers></Offers> */}
      {/* <Bestpick /> */}
      {/* <CategoryList/> */}
      <HorizontalCardProduct category={"rugged"} heading={"BestSeller"} />
      <HorizontalCardProduct category={"suede"} heading={"New Arrivals"} />
      {/* <Bestseller></Bestseller> */}

      {/* <Shopthelook></Shopthelook> */}
      {/* <DealOfTheWee /> */}
      {/* <WhyUgao></WhyUgao> */}
      {/* <Youtube /> */}
      {/* <PlantSubscription /> */}
      {/* <Review></Review> */}
      {/* <About /> */}
    </div>
  );
}

export default Home;
