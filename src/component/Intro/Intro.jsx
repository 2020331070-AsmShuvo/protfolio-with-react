import React from "react";
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbsup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FoatingDIv/FloatingDiv";
import FloatingDiv2 from "../FoatingDIv/FloatingDIv2";
import Emoji from "../FoatingDIv/Emoji";
const Intro = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="relative w-full p-16">
            <img src={boy} className="z-10 scale-75 w-[900px]" />
            <img src={Vector1} className=" top-[225px] w-[380px] absolute -z-50"/>
            <img src={Vector2} className=" top-[228px] w-[380px] absolute -z-10"/>
            <div className="top-[200px] right-[350px] absolute">
                <FloatingDiv image={crown} text={'Web Developer'}/>
            </div>
            <div className="top-[500px] right-[186px] absolute">
                <FloatingDiv2 image={thumbsup} text={'Programmer'}/>
            </div>
          </div>
          <div className="space-y-4  ">
            <h1 className="text-5xl text-[#242D49]">Hy! I Am</h1>
            <h1 className="text-6xl text-[#F5C32C] font-bold">ASM Shuvo</h1>
            <p className="py-6">
            Aspiring web developer and programmer eager to expand skills and contribute to impactful projects. Committed to learning and improving craft while delivering functional and user-friendly web solutions.
            </p>
            <button className="btn btn-sm text-gray-50 btn-warning">Hire Me</button>

            <div className="flex gap-8 scale-50">
                <img src={Github} alt="github" className="cursor-pointer"/>
                <img src={Linkedin} alt="Linkedin" className="cursor-pointer"/>
                <img src={Instagram} alt="Insta" className="cursor-pointer"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
