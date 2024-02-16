import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="carousel">
        <Carousel />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="call-to-action">
        <CallToAction />
      </div>
      <div id="careers">
        <Careers />
      </div>
      <Footer />
    </>
  );
}
