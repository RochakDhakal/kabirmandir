import React from "react";
import { Navbar } from "./header/Navbar";
import { Header } from "./header/Header";
import CarouselSlider from "./header/CarouselSlider";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CarouselSlider />
    </>
  );
};
