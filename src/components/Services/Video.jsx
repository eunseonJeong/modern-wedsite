import { brainwaveWhiteSymbol, play } from "../../img";
import { ChatBubbleWing } from "./ServicesList";

export const Video = () => {
    return (
    <>
        {/* ChatMessage */}
        <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
        Video generated!
            <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
                <img
                    src={brainwaveWhiteSymbol}
                    width={26}
                    height={26}
                    alt="Brainwave"
                />
            </div>
            <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
            just now
            </p>
            <ChatBubbleWing
            className="absolute right-full bottom-0 -scale-x-100"
            pathClassName="fill-n-6"
            />
        </div>
        {/* VideoBar */}
        <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
            <img
            src={play}
            width={24}
            height={24}
            alt="Play"
            className="object-contain mr-3"
            />
    
            <div className="flex-1 bg-[#D9D9D9]">
            <div className="w-1/2 h-0.5 bg-color-1"></div>
            </div>
      </div>
    </>
      
    );
  };
