import Image from "next/image";
import Homeone from "./Component/Homeone";
import Top from "@/app/Component/UI/Top";
import Pro from "./products/page";
import Box from "./Component/box";
import Feature from "./Component/Feature";




export default function Home() {
  return (
    <div className="w-[80%] text-center flex   m-auto flex-col ">
      <Homeone/>
      <Top headingOne='Catagory' headingTwo='Browse By Category'/>
    
      <Pro/>
      <Box/>
      <Feature/>
    </div>
  );
}
