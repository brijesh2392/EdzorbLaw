import React from "react";
import TestSeriesBox from "./TestSeriesBox";
import prelimsImg from "../../assets/prelimsImg.jpg";
import MainsImg from "../../assets/MainsImg.jpg";
import NotesImg from "../../assets/NotesImg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestSeries = () => {
  const BoxArray = [
    {
      image: prelimsImg ,
      Heading: "Prelims Qs Bank with Explanations in Visual Learning Format",
      L1: "High Yield Prelims Questions with Mains Explanations",
      L2: "Visual Learning Format, Stories, Animations",
      L3: "Precise & Qualitative with Proven Track Record",
      L4: "Extensive Subject Wise Coverage of Questions",
      L5: "Goldmine for Your Success in Judiciary Exams",
    },
    {
      image: MainsImg ,
      Heading: "Mains Test Series & Evaluation Like Never Before",
      L1: "20 State Specific Mains Test Series with Detailed Evaluation",
      L2: "Personalized Guidance with Line to Line Feedback",
      L3: "Major Subjects, Criminal & Civil Law, Judgments",
      L4: "Mains QBank in Q & A Format",
      L5: "Mains Oriented Notes, Case Law Notes",
    },
      {
        image:  NotesImg ,
        Heading: "Simplified Notes in Visual Learning Format",
        L1: "Extensive Coverage of CrPC, CPC, IEA, Constitution etc.",
        L2: "Coverage of Minor Subjects – SOGA, TPA, Admin Law",
        L3: "Notes Inclusive of Case Laws & Recent Legal Updates",
        L4: "Exhaustive & Complete Section to Section Coverage",
        L5: "Goldmine for Your Success in Judiciary Exams",
      },
  ];

  const slideSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className=" max-w-[1240px] mx-auto justify-around gap-5 ">
        <Slider {...slideSettings}>
          {BoxArray.map((boxItems, index) => (
            <TestSeriesBox
              key={index}
              image={boxItems.image}
              Heading={boxItems.Heading}
              L1={boxItems.L1}
              L2={boxItems.L2}
              L3={boxItems.L3}
              L4={boxItems.L4}
              L5={boxItems.L5}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestSeries;
