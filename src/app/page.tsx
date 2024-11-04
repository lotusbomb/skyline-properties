import Contact from "@/sections/Contact";
import Featured from "@/sections/Featured";
import Footer from "@/sections/Footer";
import Great from "@/sections/Great";
import HeroPart2 from "@/sections/HeroPart2";
import HeroSectin from "@/sections/HeroSectin";
import Listings from "@/sections/Listings";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSectin/>
      <Great/>
      <Listings/>
      <Featured/>
      <HeroPart2/>
      <Contact/>
      <Footer/>
    </>
  );
}
