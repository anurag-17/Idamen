import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../components/image/id-men-logo.svg";
import Image from "next/image";
import axios from "axios";

const solutions = [
  {
    name: "About Us",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#abts-us",
    icon: ChartBarIcon,
  },
  {
    name: "Service Offerings",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#service-of",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "FAQ's",
    description: "Connect with third-party tools that you're already using.",
    href: "#faqs",
    icon: Squares2X2Icon,
  },
  {
    name: "Contact Us    ",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#contact",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Example = () => {
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
      .get("http://34.136.73.77:1338/api/website-info?populate=logo", {
        headers: headers,
      })
      .then((res) =>
        setserviceoffering(res.data.data.attributes.logo.data[0].attributes.url)
      );
  };
  // /api/website-info
  const buttonRef = useRef();
  const handleClickPanel = () => buttonRef.current?.click();
  return (
    <Popover className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Idamen</span>
              <img
                className="h-8 sitelogo w-auto sm:h-10"
                src={`http://34.136.73.77:1338${serviceoffering}`}
                alt="idamen"
                width={232}
                height={89}
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden ">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="#abts-us"
              className="text-base font-medium	 font-sm text-black-500 hover:text-gray-900"
            >
              About Us
            </a>

            <a
              href="#service-of"
              className="text-base font-medium font-sm text-black-500 hover:text-gray-900"
            >
              Cloud Solutions
            </a>
            <a
              href="#faqs"
              className="text-base font-medium font-sm text-black-500 hover:text-gray-900"
            >
              FAQ's
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-3 lg:w-30">
            <a
              href="#contact"
              className="ml-8 hovs font-semibold	uppercase inline-flex items-center justify-center whitespace-nowrap rounded-full	bg-black  px-8 py-4 text-sm font-extrabold text-white shadow-sm hover:bg-black-500"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <Popover.Panel
        focus
        className="mbwrapper absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="z-50	 divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <Image
                  className="h-8 w-auto"
                  src={logo.src}
                  alt="Your Company"
                  width={100}
                  height={100}
                />
              </div>
              <div className="-mr-2">
                <Popover.Button
                  ref={buttonRef}
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            <div className="mt-6">
              <nav className="grid gap-y-8">
                {solutions.map((item) => (
                  <a
                    onClick={handleClickPanel}
                    onKeyDown={handleClickPanel}
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    <item.icon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="space-y-6 py-6 px-5">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#abts-us"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                About Us
              </a>

              <a
                href="#service-of"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Service Offerings
              </a>
              {resources.map((item) => (
                <button
                  onClick={() => {
                  }}
                >
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                </button>
              ))}
            </div>
            <div>
              <a
                href="#contact"
                className="flex w-full hovs font-bold items-center justify-center rounded-full border bg-black-500  px-8 py-4 font-sm uppercase text-white shadow-sm hover:bg-indigo-700"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

// export async function getserversideProps() {
//   const res = await fetch(
//     "http://34.136.73.77:1338/api/website-info?populate=logo",
//     {
//       headers: {
//         Authorization:
//           "bearer 69cb9b78ec4fbae4454e2d7d937ed535eea92c9cd01d9f77836a25ad55bba65e63943b12028ae7cdfdc451ae19895c0fff3f4b273b84765f607a277d968cbb1709d07084aab0e142aac30edae7e4fe194903eac57c726bd4d845c1fadefa85868a37e2c087dc1657da45d85dd02d22a9a09387b4d6a3dfb17f37e8875d173d91",
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
//   const data = await res.json();
//   return {
//     props: {
//       newdata: data,
//     },
//   };
// }
export default Example;
  