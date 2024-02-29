import React from "react";

function PricingCard({ title, description, price, features }) {

    return (
    <div className=" cursor-pointer border-2 border-white rounded-3xl p-8 xl:p-10 hover:shadow-white shadow-[rgba(7,_65,_210,_0.1)_0px_5px_15px] group-hover:blur-sm hover:!blur-none">
      <div className="flex items-center justify-between gap-x-4">
        <h2 className="text-lg font-semibold leading-8 text-white">{title}</h2>
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-300">{description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold tracking-tight text-white">{price}</span>
        <span className="text-sm font-semibold leading-6 text-gray-300"></span>
      </p>
      <a href="/order" aria-describedby={title}
        className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order Now</a>
      <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingCard;
