
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../components/image/id-men-hero.png"
import slide2 from "../components/image/id-men-hero.png"
import slide3 from "../components/image/id-men-hero.png"




import Image from 'next/image';

// import required modules
import { Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
     <div id="carouselExampleCaptions" className="carousel 	slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators opacity-0 absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative pb-28 pt-28 w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
    <div className='lg:max-w-7xl p-4  mx-auto flex justify-between items-center '>
                  <div class="w-1/2 pr-6 ">
                  <h3 className="text-5xl font-Quicksand font-semibold pb-5">Providing private <br/>and public cloud <br/>services</h3>
                        <p className="font-Quicksand mb-10">Idamen Systems is a comprehensive digital infrastructure provider, specializing in innovation and technology solutions.</p>  
                        <a
                        href="#contact"
                        className="flex w-4/12 hovs items-center text-sm font-bold justify-center rounded-full bg-black uppercase border  px-2 py-4 text-base  text-white shadow-sm hover:bg-indigo-700"
                      >
                        Contact Us 

                      </a>

                  </div>
                  <div class="w-1/2">
                      <Image className="" src={slide1.src} alt="" width={585} height={382}/>
                  </div>
              </div>




  
    </div>
    <div className="carousel-item relative float-left w-full">
    <div className='lg:max-w-7xl lg:p-4 py-20	 mx-auto flex lg:justify-between lg:items-center'>
    <div class="w-1/2 pr-6">
    <h3 className="text-5xl font-Quicksand font-semibold pb-5">Providing private <br/>and public cloud <br/>services</h3>
    <p className="font-Quicksand mb-10">Idamen Systems is a comprehensive digital infrastructure provider, specializing in innovation and technology solutions.</p>  
                        <a
                        href="#contact"
                        className="flex w-4/12 hovs items-center text-sm font-bold justify-center rounded-full bg-black uppercase border  px-2 py-4 text-base  text-white shadow-sm hover:bg-indigo-700"
                      >
                        Contact Us 

                      </a>

                  </div>
                  <div class="w-1/2">
                      <Image className="" src={slide2.src} alt="" width={585} height={382}/>
                  </div>
              </div>
    </div>



    <div class="carousel-item relative float-left w-full">
    <div className='lg:max-w-7xl lg:p-4 py-20	 mx-auto flex lg:justify-between lg:items-center'>
    <div class="w-1/2 pr-6">
                  <h3 className="text-5xl font-Quicksand font-semibold pb-5">Providing private <br/>and public cloud <br/>services</h3>
                  <p className="font-Quicksand mb-10">Idamen Systems is a comprehensive digital infrastructure provider, specializing in innovation and technology solutions.</p>   
                        <a
                        href="#contact"
                        className="flex w-4/12 hovs items-center text-sm font-bold justify-center rounded-full bg-black uppercase border  px-2 py-4 text-base  text-white shadow-sm hover:bg-indigo-700"
                      >
                        Contact Us 

                      </a>

                  </div>
                  <div class="w-1/2">
                      <Image className="" src={slide3.src} alt="" width={585} height={382}/>
                  </div>
              </div>

    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-zinc-400 rounded-full p-4 bg-no-repeat  hover:bg-nomral-oranges" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon bg-zinc-400	rounded-full p-4 inline-block bg-no-repeat hover:bg-nomral-oranges" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}
