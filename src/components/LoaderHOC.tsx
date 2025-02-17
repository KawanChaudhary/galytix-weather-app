import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../assets/weatherLoader.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

interface LoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const withLoader: React.FC<LoaderProps> = ({
  isLoading,
  children,
}: LoaderProps) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>
    );
  }
  return children;
};
export default withLoader;
