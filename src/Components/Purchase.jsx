import React, { useEffect } from "react";
import PricingCard from "./PurchaseCard";
import pricingData from "../pricindData";
import Aos from 'aos';
import "aos/dist/aos.css"
function Purchase() {
    useEffect(()=>{
        Aos.init();
    })
    return (
    <div className="pt-5 bg-gray-900 opacity-90" id="Purchase">
      <div className="mx-auto pb-20 mt-4 px-6 lg:px-8">
        <div className="mx-auto text-center" data-aos="fade-up">
          <h1 className=" font-semibold leading-7 text-xl text-indigo-400">Pricing</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">Whether it's just you, or your entire team - we've got you covered.</p>
        <p className="mx-auto mt-6 text-center text-xl md:text-3xl leading-8 text-gray-300">Choose the product that works best</p>
        </div>
        <div className="isolate mx-auto mt-10 grid grid-cols-2 gap-2 md:gap-8 lg:grid-cols-4 group" data-aos="zoom-in">
          {pricingData.map((product) => (
            <PricingCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Purchase;
