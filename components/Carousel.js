// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../components/image/id-men-hero.png";
import slide2 from "../components/image/id-men-hero.png";
import slide3 from "../components/image/id-men-hero.png";
import axios from "axios";

import Image from "next/image";

// import required modules
import { Pagination } from "swiper";
import { useEffect, useState } from "react";

export default function Carousel() {
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
      .get("http://34.136.73.77:1338/api/sliders?populate=image", {
        headers: headers,
      })
      .then((res) => setserviceoffering(res.data.data));
  };
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel 	slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators opacity-0 absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          {serviceoffering &&
            serviceoffering.map((item, index) => {
              // console.log(item.attributes.image.data[0].attributes.url);
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className="active"
                  aria-current="true"
                  aria-label={`Slide ${index + 1}`}
                ></button>
              );
            })}
        </div>
        <div className="carousel-inner relative pb-28 pt-28 w-full overflow-hidden">
          {serviceoffering &&
              serviceoffering.map((item, index) => {
                return (
                <>
                  <div className={` ${index ===0 ? 'carousel-item active relative float-left w-full' : 'carousel-item relative float-left w-full'}`} >
                    <div className="lg:max-w-7xl p-4  mx-auto lg:flex justify-between items-center carousal-sectionss">
                      <div className="w-1/2 pr-6">
                        <h3 className="text-5xl font-Mulish pb-5">
                          {item.attributes.title}
                        </h3>
                        <p className="font-Mulish mb-10">
                          {item.attributes.description}
                        </p>
                        <a
                          href="#contact"
                          className="flex w-4/12 hovs items-center font-extrabold justify-center rounded-lg border bg-gradient-to-r from-red-500 to-orange-500  px-5 py-3 text-base  text-white shadow-sm hover:bg-indigo-700"
                        >
                         {item.attributes.button}
                          <svg
                            className="ml-4"
                            width="33"
                            height="33"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="16.5" cy="16.5" r="16.5" fill="white" />
                            <path
                              d="M16.5333 20.8666C16.4111 20.7444 16.3471 20.5888 16.3413 20.4C16.336 20.2111 16.3944 20.0555 16.5166 19.9333L19.7833 16.6666H12.3333C12.1444 16.6666 11.986 16.6026 11.858 16.4746C11.7304 16.3471 11.6666 16.1888 11.6666 16C11.6666 15.8111 11.7304 15.6526 11.858 15.5246C11.986 15.3971 12.1444 15.3333 12.3333 15.3333H19.7833L16.5166 12.0666C16.3944 11.9444 16.336 11.7888 16.3413 11.6C16.3471 11.4111 16.4111 11.2555 16.5333 11.1333C16.6555 11.0111 16.8111 10.95 17 10.95C17.1888 10.95 17.3444 11.0111 17.4666 11.1333L21.8666 15.5333C21.9333 15.5888 21.9806 15.6582 22.0086 15.7413C22.0362 15.8248 22.05 15.9111 22.05 16C22.05 16.0888 22.0362 16.1722 22.0086 16.25C21.9806 16.3277 21.9333 16.4 21.8666 16.4666L17.4666 20.8666C17.3444 20.9888 17.1888 21.05 17 21.05C16.8111 21.05 16.6555 20.9888 16.5333 20.8666V20.8666Z"
                              fill="#FCAE31"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="w-1/2">

                      {item.attributes.image .data?( <img
                            className=""
                            src={`http://34.136.73.77:1338${item.attributes.image.data[0].attributes.url}`}
                            alt=""
                            width={585}
                            height={382}
                            />):("")} 
                           
                         
                      </div>
                    </div>
                  </div>
                
                </>
              );
            })}
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-zinc-400 rounded-full p-4 bg-no-repeat  hover:bg-nomral-oranges"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-zinc-400	rounded-full p-4 inline-block bg-no-repeat hover:bg-nomral-oranges"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
