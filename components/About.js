import abtus from "../components/image/About-us.png";
import axios from "axios";

import { useEffect, useState } from "react";
export const About = () => {
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
      .get("http://34.136.73.77:1338/api/aboutuses?populate=image", {
        headers: headers,
      })
      .then((res) => setserviceoffering(res.data.data));
  };
  return (
    <div className="abt-main max-w-7xl mx-auto mt-10 mb-16">
      <div id="abts-us" className="flex items-center">
      {serviceoffering &&
            serviceoffering.map((item, index) => {
              return (
        <>
        <div className="w-1/2 mr-12">
        {item.attributes.image .data?(
          <img
            className=""
            src={`http://34.136.73.77:1338${item.attributes.image.data[index].attributes.url}`}
            alt="Avatar"
            width={700}
            height={447}
          />
          ):("")
        }
          </div>
        <div className="w-1/2 ml-12">
          <h2 className="text-xls font-extrabold font-Quicksand mb-2 mt-4">
          {item.attributes.title}
          </h2>
          <p className="mb-2">
          {item.attributes.description}
          </p>
        </div></>
         );
        })}
      </div>
    </div>
  );
};
