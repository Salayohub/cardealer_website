import Image from "next/image";
import Hero from "@/components/sections/Hero";
import OurServicesSection from "@/components/sections/OurServiceSection";
import { ALL_SERVICES } from "@/lib/service";
import FeaturedCarsSection from "@/components/sections/FeaturedCars";
import LatestProductsGrid from "@/components/sections/LatestProductsGrid";
import ServiceBanner from "@/components/sections/ServiceBanner";
import WhyChooseUsSection from "@/components/sections/WhyChooseUs";
import { products } from "@/lib/db/products";

 export const dynamic = 'force-dynamic';
  

export default function Home() {

 
  return (
    <main>
      <Hero />
      <WhyChooseUsSection />
      <FeaturedCarsSection />
       <OurServicesSection services={ALL_SERVICES} />
       
      
      <LatestProductsGrid initialProducts={products} />
      <ServiceBanner />
      
      




     
      
    </main>
   
  );
}
