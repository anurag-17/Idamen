import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import axios from "axios";

import faqbg from "../components/image/bg-faqs.jpeg";

export default function Faq() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [faq, setfaq] = useState();

  useEffect(() => {
    fetchfaq();
  }, []);
  const fetchfaq = async () => {
    let headers = {
      Authorization:
      "bearer 69cb9b78ec4fbae4454e2d7d937ed535eea92c9cd01d9f77836a25ad55bba65e63943b12028ae7cdfdc451ae19895c0fff3f4b273b84765f607a277d968cbb1709d07084aab0e142aac30edae7e4fe194903eac57c726bd4d845c1fadefa85868a37e2c087dc1657da45d85dd02d22a9a09387b4d6a3dfb17f37e8875d173d91",
    };
    await axios
      .get("http://34.136.73.77:1338/api/faqs?populate=Img", {
        headers: headers,
      })
      .then((res) => setfaq(res.data.data));
  };
  return (
    <div
      id="faqs"
      className="fqs-main bg-fixed	my-24 mb-10 pt-16 pb-16 bg-no-repeat	bg-cover"
      style={{ backgroundImage: `url(${faqbg.src})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div class="mx-auto max-w-7xl px-4 py-2 text-center mb-8">
          <h3 class="text-xls font-extrabold font-Quicksand mb-2 mt-4 ">
            Frequently asked questions
          </h3>
          <p class="text-base text-400 font-regular">
            We are committed to providing our customers with the highest quality{" "}
            <br />
            solutions and support
          </p>
        </div>

        <div className="flex faq-clms">
          <div className="">
          <Fragment>
            {faq &&
            faq.map((item, index) => {
              return (
              <Accordion open={open === index +1}>
                <AccordionHeader onClick={() => handleOpen(index +1)}>
                 {item.attributes.question}
                </AccordionHeader>
                <AccordionBody>
                  <p>
                  {item.attributes.answer}
                  </p>
                </AccordionBody>
              </Accordion>
              
              )
              })}
            </Fragment>
          </div>

         
        </div>
      </div>
    </div>
  );
}
