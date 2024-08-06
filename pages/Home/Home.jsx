import React from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
import Meta from "../../components/Meta/Meta";

const Home = () => {
  return (
    <div>
      <Meta title={"Simple , Online Mortgage | Better Mortgage"} />
      <Header />
      <Hero />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
