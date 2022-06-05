
import { useState } from "react";
import "./works.scss";

export default function WelcomeBack() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <>
      <h2>Hello Friend! Welcome Back.</h2>
      <p>Your app is out of date. Please download the new version and take a look at all the new features.</p>   
      <CoolButton customText= {2 < 2 ? 'Download v2' : 'Download'} />
    </>
  );
}