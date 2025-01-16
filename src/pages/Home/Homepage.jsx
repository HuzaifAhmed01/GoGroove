import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AllCards from "../../components/AllCards/AllCards";
import ProductsGrids from "../../components/productGrids/ProductsGrids";
import SignUpBanner from "../../components/signUpBanner/SignUpBanner";
import BusinessQuote from "../../components/BussinessQoute/BussinessQoute";
import Testimonials from "../../components/Testimonials/Testimonials";
// import AllProductsCards from '../../components/CardsComp/AllProductsCards'

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ProductsGrids />
      <SignUpBanner />
      <AllCards />
      <BusinessQuote/>
      <Testimonials/>
    </div>
  );
};

export default Homepage;
