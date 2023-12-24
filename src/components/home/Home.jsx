import React from "react";
import { Navbar } from "./header/Navbar";
import { Header } from "./header/Header";
import { Info } from "./header/Info";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Info />
    </>
  );
};
