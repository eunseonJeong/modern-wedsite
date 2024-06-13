import React, { useRef } from 'react'
import { Section } from '../Section';
import Button from '../Button';
import { Generating } from '../Generating';
import { HeroIcon } from './HeroIcons';
import { ScrollParallax } from 'react-just-parallax';
import { CompanyLogos } from './CompanyLogos';
import { BackgroundCircles } from './BackgroundCircles';
import { BottomLine } from './BottomLine';
import { curve, heroBackground, robot } from '../../img';
import Notification from './Notification';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
  >
    <div className="container relative" ref={parallaxRef}>
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h1 mb-6">
          Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
          <span className="inline-block relative">
            Brainwave{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>
        <Button href="/pricing" white>
          Get started
        </Button>
      </div>
      {/* 메인 이미지 */}
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
            {/* 프로필 띄워주기 */}
              <ScrollParallax isAbsolutelyPositioned>
              <HeroIcon/>
              </ScrollParallax>
            {/* 프로필 띄워주기 */}
              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  title="Code generation"
                />
              </ScrollParallax>
            </div>
          </div>

           {/* 박스 밑 그라이언트 */}
          <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
          <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
        </div>
        {/* 배경 */}
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img
            src={heroBackground}
            className="w-full"
            width={1440}
            height={1800}
            alt="hero"
          />
        </div>
        {/* 배경 아이콘 */}
        <BackgroundCircles />
      </div>
        {/* 로고 아이콘 */}
      {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
    </div>

    <BottomLine />
  </Section>
);
};


export default Hero
