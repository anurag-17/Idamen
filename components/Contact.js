import React, { useEffect, useState } from "react";
import contactimg from "../components/image/Contact-img.png";
import Image from "next/image";
import axios from "axios";

export const Contact = () => {
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
      .get("http://34.122.203.107:1338/api/contactuses?populate=Img", {
        headers: headers,
      })
      .then((res) => setserviceoffering(res.data.data));
  };
  console.log(serviceoffering);
  return (
    <div className="cls-f">
      <div id="contact" className="mx-auto max-w-7xl px-4 py-2 text-center">
        <h3 className="text-xls font-extrabold font-Quicksand mb-2 mt-4">
          Contact Us
        </h3>
        <p className="text-base text-gray-400 font-regular font-Quicksand">
          We also aim to provide an engaging experience for our customers, by
          <br /> providing a comprehensive suite of cloud-native solutions,{" "}
        </p>
      </div>

     {serviceoffering ?( <div className="cnt max-w-7xl m-auto cn-fo mt-9 mb-20 mx-auto">
        <div className="md:block lg:flex items-center w-100 ">
          <div className="md:w-full m-0 lg:w-1/2 mr-12 clms-wrapper">
            <div className="mb-12 grow-0 shrink-0 basis-auto border-b-1 w-full">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="p-4 bg-gray-100 rounded-full shadow-md w-16 h-16 flex items-center justify-center">
                    <svg
                      className="w-8 text-black"
                      width="50"
                      height="50"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.74598 14.5501L11.8115 21.3036C12.1963 21.8165 12.8094 22.1484 13.5 22.1484C14.1906 22.1484 14.8037 21.8165 15.1885 21.3036L20.254 14.5501C21.3112 13.1407 21.9375 11.3896 21.9375 9.49219C21.9375 4.83232 18.1599 1.05469 13.5 1.05469C8.84007 1.05469 5.06249 4.83232 5.06249 9.49219C5.06249 11.3896 5.68887 13.1407 6.74598 14.5501Z"
                        stroke="black"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.6094 9.49219C15.6094 10.6571 14.665 11.6016 13.5 11.6016C12.335 11.6016 11.3906 10.6571 11.3906 9.49219C11.3906 8.32723 12.335 7.38281 13.5 7.38281C14.665 7.38281 15.6094 8.32723 15.6094 9.49219Z"
                        stroke="black"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.28125 25.9453H17.7187"
                        stroke="black"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-semibold mb-3 text-xl text-black-500">
                  {serviceoffering[0]["attributes"].title}
                  </p>
                  <p className="text-black-500">
                  {serviceoffering[0]["attributes"].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 grow-0 shrink-0 basis-auto border-b-1 w-full">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="p-4 bg-gray-100 rounded-full shadow-md w-16 h-16 flex items-center justify-center">
                    <svg
                      className="w-7 text-black"
                      width="40"
                      height="40"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_6_282)">
                        <path
                          d="M24.4034 18.3576C24.3604 18.3219 19.4886 14.8558 18.1732 15.0678C17.5386 15.1799 17.1763 15.613 16.4491 16.4791C16.3321 16.6189 16.0501 16.9528 15.8324 17.1909C15.3728 17.0411 14.9245 16.8587 14.4909 16.6449C12.2529 15.5553 10.4447 13.7471 9.35513 11.5091C9.14133 11.0755 8.95886 10.6272 8.80912 10.1676C9.048 9.94906 9.38275 9.66712 9.52575 9.54688C10.3878 8.82375 10.8201 8.46056 10.9322 7.82519C11.1621 6.50975 7.67812 1.63963 7.64237 1.59575C7.48371 1.37073 7.27707 1.18375 7.03736 1.0483C6.79766 0.912851 6.53087 0.832313 6.25625 0.8125C4.84412 0.8125 0.8125 6.04175 0.8125 6.92331C0.8125 6.9745 0.886438 12.1777 7.30275 18.7046C13.8223 25.1136 19.0255 25.1875 19.0767 25.1875C19.9574 25.1875 25.1875 21.1559 25.1875 19.7437C25.1675 19.4691 25.0868 19.2023 24.9512 18.9626C24.8156 18.7229 24.6285 18.5163 24.4034 18.3576ZM18.9865 23.5576C18.2812 23.4975 13.91 22.9214 8.45 17.5581C3.06069 12.0713 2.49925 7.69275 2.44319 7.01431C3.50819 5.34271 4.79439 3.82283 6.26681 2.496C6.29931 2.5285 6.34238 2.57725 6.39762 2.64062C7.52686 4.18212 8.49963 5.83234 9.3015 7.56681C9.04074 7.82915 8.76511 8.07628 8.476 8.307C8.02766 8.64862 7.61595 9.03581 7.2475 9.46237C7.18516 9.54985 7.14078 9.64882 7.11693 9.75356C7.09308 9.85829 7.09024 9.96672 7.10856 10.0726C7.28051 10.8174 7.54386 11.5381 7.89262 12.2184C9.14216 14.7843 11.2156 16.8574 13.7816 18.1066C14.4617 18.4558 15.1825 18.7195 15.9274 18.8914C16.0333 18.9102 16.1418 18.9075 16.2466 18.8837C16.3514 18.8598 16.4503 18.8152 16.5376 18.7525C16.9657 18.3825 17.3542 17.9692 17.6971 17.5191C17.9522 17.2153 18.2926 16.8098 18.4218 16.6953C20.1607 17.4963 21.8146 18.4703 23.3586 19.6024C23.426 19.6593 23.4739 19.7031 23.5056 19.7316C22.1787 21.2045 20.6585 22.4909 18.9865 23.556V23.5576Z"
                          fill="black"
                        />
                        <path
                          d="M18.6875 12.1875H20.3125C20.3106 10.4642 19.6251 8.81201 18.4066 7.59344C17.188 6.37488 15.5358 5.68944 13.8125 5.6875V7.3125C15.105 7.31379 16.3443 7.82782 17.2582 8.74178C18.1722 9.65574 18.6862 10.895 18.6875 12.1875Z"
                          fill="black"
                        />
                        <path
                          d="M22.75 12.1875H24.375C24.3718 9.38714 23.2579 6.7024 21.2778 4.72225C19.2976 2.74209 16.6129 1.62823 13.8125 1.625V3.25C16.182 3.2528 18.4537 4.19532 20.1292 5.87082C21.8047 7.54632 22.7472 9.81799 22.75 12.1875Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_6_282">
                          <rect width="26" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-semibold mb-3 text-xl text-black-500">
                  {serviceoffering[1]["attributes"].title}
                  </p>
                  <p className="text-black-500">
                    {" "}
                    <a href={`${serviceoffering[1]["attributes"].description}`}> {serviceoffering[1]["attributes"].description}</a>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="p-4 bg-gray-100 rounded-full shadow-md w-16 h-16 flex items-center justify-center">
                    <svg
                      className="w-8 text-black"
                      width="40"
                      height="40"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.627 4.00781H2.37305C1.06191 4.00781 0 5.07632 0 6.38086V20.6191C0 21.9314 1.06972 22.9922 2.37305 22.9922H24.627C25.9271 22.9922 27 21.9359 27 20.6191V6.38086C27 5.07864 25.9423 4.00781 24.627 4.00781ZM24.2946 5.58984C23.8098 6.0721 15.4661 14.3719 15.178 14.6584C14.7298 15.1067 14.1339 15.3535 13.5 15.3535C12.8661 15.3535 12.2702 15.1066 11.8205 14.6569C11.6268 14.4642 3.37516 6.25609 2.70538 5.58984H24.2946ZM1.58203 20.2971V6.70386L8.41841 13.5042L1.58203 20.2971ZM2.70638 21.4102L9.54007 14.6199L10.7033 15.7771C11.4504 16.5241 12.4436 16.9355 13.5 16.9355C14.5564 16.9355 15.5496 16.5241 16.2952 15.7785L17.4599 14.6199L24.2936 21.4102H2.70638ZM25.418 20.2971L18.5816 13.5042L25.418 6.70386V20.2971Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-semibold mb-3 text-xl text-black-500">
                    Email
                  </p>
                  <p className="text-black-500">
                    <a href={`${serviceoffering[5]["attributes"].title}`}>{serviceoffering[5]["attributes"].description}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-full ml-32 md:ml-0 lg:w-1/2 lg:ml-4">
            <div className="block bg-white w-100">
              <form>
                <div className="form-group mb-5">
                  <input
                    type="text"
                    className="form-control block
         w-full
         px-5 py-3
         text-base
         font-normal
         text-gray-700
         bg-white bg-clip-padding
         border border-solid border-gray-300
         rounded-full
         transition
         ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group mb-5">
                  <input
                    type="text"
                    className="form-control block
          w-full
          px-5 py-3
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded-full
          transition
          ease-in-out
        focus:outline-none"
                    id="exampleInput7"
                    placeholder="Phone
        "
                  />
                </div>
                <div className="form-group mb-5">
                  <input
                    type="email"
                    className="form-control block
    w-full
    px-5 py-3
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded-full
    transition
    ease-in-out
        focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-5">
                  <textarea
                    className="
        form-control
        w-full
         px-5 py-4
         h-40
         text-base
         font-normal
         text-gray-700
         bg-white bg-clip-padding
         border border-solid border-gray-300
         rounded-xl
         transition
         ease-in-out
        m-0
        focus:outline-none
      "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
      w-full px-5 py-4 text-sm text-bold hovs uppercase text-white font-extrabold bg-black-500 border border-solid border-gray-300 rounded-full transition ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>):("")}
    </div>
  );
};
