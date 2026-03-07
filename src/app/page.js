"use client";
import About from "@/Components/About/About";
import Airport from "@/Components/Airport/Airport";
import Blog from "@/Components/Blog/Blog";
import Car from "@/Components/Cars/Cars";
import Faq from "@/Components/Faq/Faq";
import Hero from "@/Components/Hero/Hero";
import Reviews from "@/Components/Reviews/Reviews";
import Services from "@/Components/Services/Services";
import useLenis from "../Components/hooks/useLenis";
import BookCar from "@/Components/BookCar/BookCar";
export default function Home() {
  useLenis();
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Car />
      <Airport />
      <Reviews />
      {/* <BookCar /> */}
      <Blog />
      <Faq />
    </>
  );
}
