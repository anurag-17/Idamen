import React from "react";
import adiba from "../components/image/adiba-bank-cloud.png"


import Image from "next/image";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>

      
    <div id="service-of" className="ser-wrapper mx-auto max-w-7xl px-4 py-2 text-center">

<h3 className="text-xls font-extrabold font-Quicksand mb-2 mt-4 ">Cloud Solutions</h3>
<p className="text-base text-gray-400 font-regular"> We are proud to be the trusted partner of organizations across the globe</p>





<ul className="nav nav-tabs flex mt-7 flex-col items-center md:flex-row flex-wrap list-none border-b-0 pl-0 mb-10" id="tabs-tab"
  role="tablist">
  <li className="nav-item" role="presentation">
    <a href="#tabs-home" className="
      nav-link
      block
      font-medium
      text-2xl	
      leading-tight
       border-x-0 border-t-0 border-b-2 border-transparent
      py-3
      ml-2
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
      aria-selected="true">ADIBA Banking Cloud</a>
  </li>
  <li className="nav-item" role="presentation">
    <a href="#tabs-profile" className="
      nav-link
      block
      font-semibold
      text-2xl	
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      py-3
      my-2
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
      aria-controls="tabs-profile" aria-selected="false">SEED Enterprise Blockchain</a>
  </li>

</ul>
<div class="tab-content" id="tabs-tabContent">
  <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
  <div id="abts-us" className="flex shadow-md	justify-between	p-12	items-center"> 


   



   <div className="w-2/3 mr-24">
   <h2 className="text-4xl text-left font-semibold	font-Quicksand mb-6">ADIBA Banking Cloud </h2>
   <p className="mb-2 text-left"> ADIBA is a ready-to-go digital banking platform suitable for fintechs, banks and digital financial initiutions. Our platform is designed to provide customers with a full range of banking services, including online banking, credit and debit card processing, and loan management having features such as automated payments, invoicing, and fraud prevention. </p>

   <p className="mb-2 text-left"> It simplifies and automates complex banking processes, reduces manual effort and time spent on tedious setup and implementation of enterprise solutions, and provides a secure and compliant solution to managing financial operations. We are focused on providing our customers with the best possible experience and are constantly innovating to improve our platform and the services we offer. </p>

   </div>


   <div className="w-1/3 text-end	">
<Image className="w-full" src={adiba.src} alt="Avatar" width={384} height={310} />
   
   </div>    



</div>
  
  
  
  
  
  
  
  
  
  
   </div>













  <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
  <div id="abts-us" className="flex shadow-md	justify-between	p-12	items-center"> 


   



<div className="w-2/3 mr-24">
<h2 className="text-4xl text-left font-semibold	font-Quicksand mb-6">SEED Enterprise Blockchain </h2>
<p className="mb-2 text-left"> ADIBA is a ready-to-go digital banking platform suitable for fintechs, banks and digital financial initiutions. Our platform is designed to provide customers with a full range of banking services, including online banking, credit and debit card processing, and loan management having features such as automated payments, invoicing, and fraud prevention. </p>

<p className="mb-2 text-left"> It simplifies and automates complex banking processes, reduces manual effort and time spent on tedious setup and implementation of enterprise solutions, and provides a secure and compliant solution to managing financial operations. We are focused on providing our customers with the best possible experience and are constantly innovating to improve our platform and the services we offer. </p>

</div>


<div className="w-1/3 text-end	">
<Image className="w-full" src={adiba.src} alt="Avatar" width={384} height={310} />

</div>    



</div>
  </div>


</div>


</div>

    </>
  );
};

export default Tabs;