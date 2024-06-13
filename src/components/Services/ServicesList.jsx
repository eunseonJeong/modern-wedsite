import { chromecast, disc02, recording01, recording03, sliders04 } from "../../img";

export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];

    export const ChatBubbleWing = ({ className, pathClassName }) => {
        return (
        <svg
            className={`${className || ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="37"
        >
            <path
            className={`${pathClassName || ""}`}
            d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
            />
        </svg>
        );
    };
  