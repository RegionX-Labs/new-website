import React from "react";
import Slider from "react-slick";
import teamData from "../assets/data/innovative-slider.json";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "./common/Icon";
import TeamBox from "./common/TeamBox";
import StarGreenImg from "/star-green.svg";

const Innovators = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: (
      <button type="button" className="slick-arrow slick-next">
        <ArrowLongRightIcon />
      </button>
    ),
    prevArrow: (
      <button type="button" className="slick-arrow slick-prev">
        <ArrowLongLeftIcon />
      </button>
    ),
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="team"
      className="lg:py-[100px] md:py-[60px] py-[40px] bg-slate-700 overflow-hidden"
    >
      <div id="team" className="container mx-auto px-12 2xl:px-12">
        <div className="flex flex-col md:items-center md:justify-center md:mb-5 mb-[15px]">
          <img
            src={StarGreenImg}
            alt=""
            className="w-[40px] h-[40px] object-contain"
          />
        </div>
        <h2 className="text-black text-center lg:text-[48px] md:text-[40px] text-[24px] md:leading-[54px] leading-[28px] font-inter font-medium lg:mb-5 mb-[25px] md:pr-0">
          About <span className="text-primary">RegionX</span>
        </h2>
      </div>
      <div className="max-w-[1600px] m-auto">
        <p className="mt-16 lg:text-xl mx-6 sm:mx-6 md:mx-12 lg:mx-32">
          The RegionX team was founded and is led by <strong className="font-semibold">Sergej Sakac</strong>. 
          He has been part of the Polkadot ecosystem for over three years and is an active contributor to the Polkadot-SDK. 
          Sergej is a member of the Fellowship and an alumnus of the engineering track at the Polkadot Blockchain Academy held in Berkeley. 
        </p>
        <p className="mt-6 lg:text-xl mx-6 sm:mx-6 md:mx-12 lg:mx-32">
          The project was founded in 2023, shortly after Agile Coretime was announced in {` `}
          <a 
            className="font-semibold underline" 
            target={"_blank"}
            href="https://github.com/polkadot-fellows/RFCs/blob/main/text/0001-agile-coretime.md"
          >
            {`Polkadot RFC-1`}
          </a>. 
           Ever since the launch of the project, we have been leading the way and are currently the only UI for managing Coretime.
          We are also the first team to work on developing — and the only one to deliver — a secondary marketplace for Coretime.
        </p>
        <p className="mt-6 lg:text-xl mx-6 sm:mx-6 md:mx-12 lg:mx-32">
           RegionX was initially funded by the <strong className="font-semibold">Web3 Foundation</strong>, after which we continued receiving funding from the <strong className="font-semibold">Polkadot Treasury</strong>, 
           as the project is developing a product that <strong className="font-semibold">represents a key part of Polkadot</strong> — Coretime.
          <br />
          Coretime is the main product that Polkadot offers, and we are the <strong className="font-semibold">primary UI</strong> for Coretime management as well as the only <strong className="font-semibold">secondary marketplace</strong> for Coretime.
        </p>
      </div>
    </section>
  );
};

export default Innovators;
