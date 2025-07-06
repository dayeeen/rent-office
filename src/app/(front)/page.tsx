import BenefitsSection from "@/components/BenefitsSection";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import FreshSpaceSection from "@/features/offices/sections/FreshSpaceSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header>
      </Header>      
      <CitiesSection>
      </CitiesSection>
      <BenefitsSection>
      </BenefitsSection>
      <FreshSpaceSection>
      </FreshSpaceSection>
    </>
  );
}
