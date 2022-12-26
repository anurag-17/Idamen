import React, { useEffect, useState } from "react";
import adiba from "../components/image/adiba-bank-cloud.png";

import Image from "next/image";
import axios from "axios";

const Tabs = () => {
  const [serviceoffering, setserviceoffering] = useState();

  useEffect(() => {
    fetchserviceoffering();
  }, []);
  const fetchserviceoffering = async () => {
    let headers = {
      Authorization:
        "bearer 69cb9b78ec4fbae4454e2d7d937ed535eea92c9cd01d9f77836a25ad55bba65e63943b12028ae7cdfdc451ae19895c0fff3f4b273b84765f607a277d968cbb1709d07084aab0e142aac30edae7e4fe194903eac57c726bd4d845c1fadefa85868a37e2c087dc1657da45d85dd02d22a9a09387b4d6a3dfb17f37e8875d173d91",
    };
    await axios
      .get("http://34.122.203.107:1338/api/clouds?populate=image", {
        headers: headers,
      })
      .then((res) => setserviceoffering(res.data.data));
  };
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div
        id="service-of"
        className="ser-wrapper mx-auto max-w-7xl px-4 py-2 text-center"
      >
        <h3 className="text-xls font-extrabold font-Quicksand mb-2 mt-4 ">
          Cloud Solutions
        </h3>
        <p className="text-base text-gray-400 font-regular">
          {" "}
          We are proud to be the trusted partner of organizations across the
          globe
        </p>

        <ul
          className="nav nav-tabs flex mt-7 flex-col items-center md:flex-row flex-wrap list-none border-b-0 pl-0 mb-10"
          id="tabs-tab"
          role="tablist"
        >
          {serviceoffering &&
            serviceoffering.map((item, index) => {
              console.log(serviceoffering)
              return (
                <>
                  <li className="nav-item" role="presentation">
                    <a
                      href={`#${item.attributes.title}`}
                      className="nav-link block font-medium text-2xl leading-tight border-x-0 border-t-0 border-b-2 border-transparent py-3  ml-2  focus:border-transparent active"
                      id={`${item.attributes.title}`}
                      data-bs-toggle="pill"
                      data-bs-target={`#${item.attributes.title}`}
                      role="tab"
                      aria-controls={`#${item.attributes.title}`}
                      aria-selected="true"
                    >
                      {item.attributes.title}
                    </a>
                  </li>
                </>
              );
            })}
        </ul>
        <div className="tab-content" id="tabs-tabContent">
          {serviceoffering &&
            serviceoffering.map((item, index) => {
              // console.log(item.attributes.image .data[0].attributes.url);
              return (
                <>
                  <div
                    className={index=== 0?("tab-pane fade show active"):("tab-pane fade  ")}
                    id=  {item.attributes.title}
                    role="tabpanel"
                    aria-labelledby={`${item.attributes.title}-tab`}
                  >
                    <div
                      id="abts-us"
                      className="flex shadow-md	justify-between	p-12 items-center"
                    >
                      <div className="w-2/3 mr-24">
                        <h2 className="text-4xl text-left font-semibold	font-Quicksand mb-6">
                        {item.attributes.title}
                        </h2>
                        <p className="mb-2 text-left">
                          {" "}
                          {item.attributes.description}
                        </p>

                       
                      </div>

                      <div className="w-1/3 text-end	">
                      {item.attributes.image .data?(
                        <img
                          className="w-full"
                          src={`http://34.122.203.107:1338${item.attributes.image .data[0].attributes.url}`}
                          alt="Avatar"
                          width={384}
                          height={310}
                          />
                          ):("")}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        
        </div>
      </div>
    </>
  );
};

export default Tabs;
