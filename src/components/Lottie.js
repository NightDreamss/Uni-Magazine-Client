import React from "react";
import Lottie from "react-lottie";
import * as homeJson from "../images/55356-chris-gannon.json";
import * as studentJson from "../images/41449-carousel.json";

const LottieControl = ({ height, width, home, student }) => {
  const defaultOptions = home
    ? {
        loop: true,
        autoplay: true,
        animationData: homeJson.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }
    : student
    ? {
        loop: true,
        autoplay: true,
        animationData: studentJson.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }
    : "";
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        ariaRole="none"
      />
    </div>
  );
};

export default LottieControl;
